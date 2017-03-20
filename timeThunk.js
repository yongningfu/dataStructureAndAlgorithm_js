//分时函数
// 为了避免js一下子执行太多的任务，我们使用分时函数进行，每个一段
// 时间执行一次任务，直到所有的任务执行完，这个的话，在许多大数据量渲染等场景会使用

/**
 *  分时执行的任务数据，分时执行的逻辑函数，每次执行的数量, 和时间间隔
 */
var timeChunk = function(dataArray, fn, count, duration) {
  var timer;
  var length = dataArray.length;
  var isRunning = false;   //防止重复
  var eachExecute = function() {
    for(var i = 0; i < Math.min(count || 1, dataArray.length); i++) {
      var obj = dataArray.shift();
      fn(obj); //每次实际执行操作
    }
  }

  return function() {
    if (isRunning) return;
    isRunning = true;
    timer =setInterval(function() {
      if (dataArray.length == 0) {
        clearInterval(timer);
        isRunning = false;
      }
      eachExecute();
    }, duration);
  }
}


var render = timeChunk(new Array(10), function() {console.log('render')}, 5, 1000);
render();
render();

