var Single;

// (function(root) {

//   var instance;
//   function single() {
//     if (instance) {
//       return instance;
//     }
//     this.name = "aa";
//     instance = this;
//   }
//   Single = single;
// })();

var single = (function() {
  var instance;
  return function () {
    if (instance) {
      return instance;
    }
    this.name = "ttt";
    instance = this;
  }
})();

var a1 = new single("aa");
var a2 = new single("aa");
console.log(a1 === a2);