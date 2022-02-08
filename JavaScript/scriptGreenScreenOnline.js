var image1 = null;
var image2 = null;
var image3 = null;
var canvas1 = null;
var canvas2 = null;
var canvas3 = null;

function loadForegroundImage() {
  /*alert('Foreground Image loaded');*/
  var front = document.getElementById("fgImage");
  image1 = new SimpleImage(front);
  canvas1 = document.getElementById("can1");
  image1.drawTo(canvas1);
}

function loadBackgroundImage() {
  /*alert('Background image loaded');*/
  var back = document.getElementById("bgImage");
  image2 = new SimpleImage(back);
  canvas2 = document.getElementById("can2");
  image2.drawTo(canvas2);
}

function doGreenScreen() {
  /*alert('Composite created');*/
  if (image1 == null || !image1.complete()) {
    alert("The foreground image has not been loaded");
  }
  if (image2 == null || !image2.complete()) {
    alert("The background image has not been loaded");
  }
  if(image1.getWidth()!=image2.getWidth() || image1.getHeight()!=image2.getHeight()){
    image2.setSize(image1.getWidth(),image1.getHeight());
  }
  image3 = new SimpleImage(image1.getWidth(),image1.getHeight());
  canvas3 = document.getElementById("can3");
  for (var pixel of image1.values()) {
    if (pixel.getGreen() > (pixel.getRed() + pixel.getBlue())) {
      var x = pixel.getX();
      var y = pixel.getY();
      var bgPixel = image2.getPixel(x, y);
      image3.setPixel(x, y, bgPixel);
    } else {
      var x = pixel.getX();
      var y = pixel.getY();
      image3.setPixel(x, y, pixel);
    }
  }
  image3.drawTo(canvas3);
}

function clearCanvas() {
  /*alert('Canvas cleared');*/
  var con1, con2, con3;
  if (canvas1 != null) {
    con1 = canvas1.getContext("2d");
    con1.clearRect(0, 0, canvas1.width, canvas1.height);
  }
  if (canvas2 != null) {
    con2 = canvas2.getContext("2d");
    con2.clearRect(0, 0, canvas2.width, canvas2.height);
  }
  if (canvas3 != null) {
    con3 = canvas3.getContext("2d");
    con3.clearRect(0, 0, canvas3.width, canvas3.height);
  }
}