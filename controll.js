/**
 * redux源码中  最难理解的部分是应用中间件部分 apply middleware
 * 
 * 它 实现的中间件执行流程是 比如中间件 A B C
 * 流程为 A B C  dispatch C B A
 * 
 *  现在 我们也来实现这一效果
 */

//基本实现  如果next是一个函数的话 是不是可以直接实现了

var simulateMiddleNext = next => action => {
  console.log('1');
  next(action);
  console.log('2');
}

simulateMiddleNext((action) => console.log(action))('action');

//--------------------------------------------------//


//函数式编程之函数组合
var compose = function(...funs) {
  return funs.reduce(function(pre, next) {
    return function(...args) {
      return pre(next(...args))
    }
  });
}


var multi2 = arg => arg * 2;

var should8 = compose(multi2, multi2, multi2);

console.log(should8(1));


function dispatch(action) {
  console.log('dispatch', action);
}


//middleware 的标准形式 (getState, dispatch) => next => action
//这里我们用不到 (getstate, dispatch) 而且本来的流程控制中 也没有这一个

//next必须是一个函数
//action为传递的数据


var middleWareA = next => action => {
  console.log('A', action);
  next(action);
  console.log('A', action);
}

var middleWareB = next => action => {
  console.log('B', action);
  next(action);
  console.log('B', action);
}

var composeFuns = compose(middleWareA, middleWareB);

//为每个函数都填充他们的next
var fillNextState = composeFuns(dispatch);

//这里得到的是A的 action函数
fillNextState(22);                                        

/**
 *  A的action 函数执行，得到   A (A-next) A
 *                                 !
 *                         A的next填充为B的action, 即A的next就是B的action
 *                                 !
 *                            B  (B-next) B
 *                                  !
 *                            B的next实际就是dispatch
 *                                 !          
 *                                dispatch()
 */













 