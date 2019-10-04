// wrapping the main.js code in this event listner will ensure that the program will not run until
// document is finished loading
window.addEventListener("load", function(event) {

    "use strict";

      // FUNCTIONS 
    
  
    var render = function() {
  
      display.renderColor(game.color);
      display.render();
  
    };
  
    var update = function() {
  
      game.update();
  
    };







var controller = new Controller();

var display = new Display(document.querySelector('canvas'));

var game = new Game();

var engine = new Engine (1000/30, render, update);

window.addEventListener("resize", display.handleResize);
window.addEventListener("keydown", controller.handleKeyDownUp);
window.addEventListener("keyup", controller.handleKeyDOwnUp);

display.resize();
engine.start();


});