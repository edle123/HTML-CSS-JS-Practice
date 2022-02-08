//Modifying Images
//Part 1
var image = new SimpleImage("hilton.jpg");
print(image);
var width = image.getWidth();
var oneThird = (width/3);
var twoThird = 2*(width/3);
for(var pixel of image.values()){
    if(pixel.getX()<oneThird){
        pixel.setRed(255);
    }
    else if(pixel.getX()>oneThird && pixel.getX()<twoThird){
        pixel.setGreen(255);
    }
    else{
        pixel.setBlue(255);
    }
}
print(image);

//Part 2
function swapRedGreen(pixel){
    var red = pixel.getRed();
    var green = pixel.getGreen();
    pixel.setRed(green);
    pixel.setGreen(red);
}
var image = new SimpleImage("smalllion.jpg");
print(image);
for (var pixel of image.values()){
    swapRedGreen(pixel);
}
print(image);

//Part 3

var image = new SimpleImage("duke_blue_devil.png");
print(image);
for(var pixel of image.values()){
    if(pixel.getRed()!=255 && pixel.getGreen()!=255 && pixel.getBlue()!=255){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(image);
