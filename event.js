/**
 * 实现一个自定义的事件机制
 * 观察者模式，主体与观察者
 * 
 * 主体的状态变化能触发观察者的监听事件
 * 比如dom中的button就是一个主体，给它的监听事件onclick就是一个观察者，button点击的时候
 * 能触发观察者的click监听事件
 */

//统一把事件放入原型中
var Event = function() {
  this.handlers = {};
}

Event.prototype.addListener = function(type, handler) {
  var handlers = this.handlers;
  if (!(type in handlers)) {
    handlers[type] = [];
  }
  handlers[type].push(handler);
}

Event.prototype.fire = function(type) {
  var fireHnadlers = this.handlers[type];
  if (fireHnadlers) {
    for (var i = 0, length = fireHnadlers.length; i < length; i++) {
      fireHnadlers[i]();
    }
  }
}

Event.prototype.removeHandler = function(type, handler) {
  if (this.handlers[type] instanceof Array) {
    var currentHandlers = this.handlers[type];
    var deleteIndex  = -1;
    for (var i = 0, length = currentHandlers.length; i < length; i++) {
      if (handler === currentHandlers[i]) {
        deleteIndex = i;
        break;
      }
    }

    if (deleteIndex > -1) {
      currentHandlers.splice(deleteIndex, 1);
    }
  }
} 



//仿造redux类型

var Event = function () {

  var handlers = {};
  var subscribe = function(type, handler) {
    if (typeof handlers[type] === 'undefined') handlers[type] = [];
    handlers[type].push(handler);

    var isSubscribed = true;

    return function unsubscribe() {
      //防止重复删除
      if (!isSubscribed) return;
      isSubscribed = false;

      var index = handlers[type].indexOf(handler);
      handlers[type].splice(index, 1);
    }
  }

  var toggle = function(type) {
    if (Array.isArray(handlers[type])) {
      for (var i = 0; i < handlers[type].length; i++) {
        handlers[type][i]();
      }
    }
  }

  return {
    subscribe,
    toggle
  }
}


var event = new Event();

var unClick1 = event.subscribe('click', function() {
  console.log('click1');
});

var unClick2 = event.subscribe('click', function() {
  console.log('click2');
});

var uninput1 = event.subscribe('input', function() {
  console.log('input1');
});

var uninput2 = event.subscribe('input', function() {
  console.log('input2');
});


event.toggle('click');
event.toggle('input');
uninput1();
event.toggle('input');











