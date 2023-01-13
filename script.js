function setUp(window){
  let document = window.document
  Object.prototype.on = function (a, b){
    this.addEventListener(a, b)
    return this
  }
  Object.prototype.off = function(a, b){
    this.removeEventListener(a, b)
    return this
  }
  Array.prototype.remove = function(x){
    let a = []
    for (let i in this)
      if(i != x)
      a.push(this[i])
    return a
  }
  window.can = document.querySelector('canvas')
  window.ctx = window.can.getContext('2d')
  window.can.width = window.innerWidth
  window.can.height = window.innerHeight
  window.randNum = function (a, b) {
    if (a === void 0) return Math.round(Math.random())
    else if (b === void 0) return Math.floor(Math.random() * a)
    else return Math.random() * (b - a) + a
  }







}
















// let canv = document.getElementById('myCanvas')
// const ctx = canv.getContext('2d')
// canv.style.backgroundColor = "#808080"
// // function that triggers when page is loaded
// window.onload = function () {
//   console.log('loading')
//   // canv.style.backgroundColor = "#808080"
//   resizeCanvas()
// }
// //function that triggers when page is resized
// window.onresize = function () {
//   console.log('resizing')
//   resizeCanvas()
// }
// //resize canvas width/height to window width/height
// function resizeCanvas() {
//   canv.width = window.innerWidth
//   canv.height = window.innerHeight
// }









// function startGame(){
//   console.log('start game')
// }

