//Advanced Modifying Images
//Part 1
var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
var newImage = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for(var pixel of fgImage.values()){
    if (pixel.getGreen()>pixel.getRed()+pixel.getBlue()){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x,y);
        newImage.setPixel(x,y,bgPixel);
    }
    else{
        var x = pixel.getX();
        var y = pixel.getY();
        newImage.setPixel(x,y,pixel);
    }
}
print(newImage);
//Part 2

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if (x>img.getWidth()/2 && y<img.getHeight()/2){
    px.setGreen(255);
  }
}
print (img);

//Part 3

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}
var img = new SimpleImage("smallpanda.png");
print(img);
function addBorder(image,border){
    var width = image.getWidth()-border;
    var height = image.getHeight()-border;
    for(var pixel of image.values()){
        if(pixel.getX()<=border || pixel.getX()>width || pixel.getY()<=border || pixel.getY()>height){
            setBlack(pixel);
        }
    }
    print(image);
}
addBorder(img,10);
