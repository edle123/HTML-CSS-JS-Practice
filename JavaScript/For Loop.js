//For loop
//Changes every pixel in an image to be yellow
var image = new SimpleImage(200,200);
print(image);
for (var pixel of image.values()){
    pixel.setRed(255);
    pixel.setGreen(255);
}
print(image);
//Changes every pixel to magenta
for (var pixel of image.values()){
    pixel.setGreen(0);
    pixel.setBlue(255);
}
print(image);
