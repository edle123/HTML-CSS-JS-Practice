var image = null;
var filteredImage = null;
var canvas = null;
var context = null;

function upload() {
  image = new SimpleImage(document.getElementById("picture"));
  canvas = document.getElementById("can1");
  image.drawTo(canvas);
}

function grayscale() {
  if (imageIsLoaded(image)) {
    resetButton();
    doGray();
  }
}

function doGray() {
  filteredImage = new SimpleImage(image);
  for (var pixel of filteredImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  filteredImage.drawTo(canvas);
}

function makeRed() {
  if (imageIsLoaded(image)) {
    resetButton();
    doRed();
  }
}

function doRed() {
  filteredImage = new SimpleImage(image);
  for (var pixel of filteredImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(avg);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  filteredImage.drawTo(canvas);
}

function makePurple() {
  if (imageIsLoaded(image)) {
    resetButton();
    doPurple();
  }
}

function doPurple() {
  filteredImage = new SimpleImage(image);
  for (var pixel of filteredImage.values()) {
    pixel.setRed(191);
    pixel.setBlue(255);
  }
  filteredImage.drawTo(canvas);
}

function makeRainbow() {
  if (imageIsLoaded(image)) {
    resetButton();
    doRainbow();
  }
}

function doRainbow() {
  filteredImage = new SimpleImage(image);
  var stripe = filteredImage.getHeight() / 7;
  for (var pixel of filteredImage.values()) {
    if (pixel.getY() <= stripe) {
      pixel.setRed(255);
    } else if (pixel.getY() > stripe && pixel.getY() <= 2 * stripe) {
      pixel.setRed(255);
      pixel.setGreen(128);
    } else if (pixel.getY() > 2 * stripe && pixel.getY() <= 3 * stripe) {
      pixel.setRed(255);
      pixel.setGreen(255);
    } else if (pixel.getY() > 3 * stripe && pixel.getY() <= 4 * stripe) {
      pixel.setGreen(255);
    } else if (pixel.getY() > 4 * stripe && pixel.getY() <= 5 * stripe) {
      pixel.setBlue(255);
    } else if (pixel.getY() > 5 * stripe && pixel.getY() <= 6 * stripe) {
      pixel.setRed(128);
      pixel.setBlue(255);
    } else {
      pixel.setRed(191);
      pixel.setBlue(255);
    }
  }
  filteredImage.drawTo(canvas);
}

function makeBlur() {
  if (imageIsLoaded(image)) {
    resetButton();
    doBlur();
  }
}

function doBlur() {
  filteredImage = new SimpleImage(image);
  for (var pixel of filteredImage.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5) {
      filteredImage.setPixel(x, y, pixel);
    } 
    else {
      var newX = x + getRandom(-10, 10);
      var newY = y + getRandom(-10, 10);
      if (newX < 0) {
        newX = 0;
      }
      if (newY < 0) {
        newY = 0;
      }
      if (newX > filteredImage.getWidth() - 1) {
        newX = filteredImage.getWidth() - 1;
      }
      if (newY > filteredImage.getHeight() - 1) {
        newY = filteredImage.getHeight() - 1;
      }
      filteredImage.setPixel(x, y, filteredImage.getPixel(newX, newY));
    }
  }
  filteredImage.drawTo(canvas);
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function resetButton() {
  if (imageIsLoaded(image)) {
    image.drawTo(canvas);
  }
}

function clearCanvas() {
  canvas = document.getElementById("can1");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  image = null;
}

function imageIsLoaded(image) {
  if (image == null || !image.complete()) {
    alert("Image is not loaded");
  } else {
    return true;
  }
}