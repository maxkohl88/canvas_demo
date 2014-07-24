$(document).ready(function(){
  canvasApp.initialize();
});

var canvasApp = canvasApp || {};

canvasApp = {
  initialize: function(event){
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

    //draw image and resize
    imageObj.onload = function(){
      canvas.width = 500;
      canvas.height = 500;
      context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvas.width, canvas.height);
    };

    imageObj.src ='';


    $("#image-form").submit(function(event) {
      var $form = $(event.target),
      $urlInput = $form.find("input[name='urlInput']");
      url = $urlInput.val();

      imageObj.src = url;
      canvas.width = 500;
      canvas.height = 500;
      context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, canvas.width, canvas.height);
      // $urlInput.clear();

      event.preventDefault();
    });

    var mouse = {x: 0, y: 0};
 
    /* Mouse Capturing Work */
    canvas.on('mousemove', function(e) {
      mouse.x = e.pageX - this.offsetLeft;
      mouse.y = e.pageY - this.offsetTop;
    }, false);

    /* Drawing on Paint App */
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';
     
    canvas.addEventListener('mousedown', function(e) {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
     
        canvas.addEventListener('mousemove', onPaint, false);
    }, false);
     
    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);
    }, false);
     
    var onPaint = function() {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };

    event.preventDefault();
  },

};
