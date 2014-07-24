$(document).ready(function(){
  canvasApp.initialize();
});

var canvasApp = canvasApp || {};

canvasApp = {
  initialize: function(event){
    var canvas = document.getElementById('my-canvas');
    var context = canvas.getContext('2d');
    var imageObj = new Image();

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
      // debugger;
      // $urlInput.clear();

      event.preventDefault();
    });
    event.preventDefault();
  }
};
