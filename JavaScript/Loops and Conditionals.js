//Exercise 1 - Turn the chapel red.
var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    pixel.setRed(255);
}

print(image);
print ("\n");

//Exercise 2 - Remove all the red
var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    pixel.setRed(0);
}

print(image);
print("\n");

//Exercise 3 - Turn the eggs less red
var image = new SimpleImage("eastereggs.jpg");
for (var pixel of image.values()){
    if (pixel.getRed()>=70){
        pixel.setRed(70);
    }
}

print(image);
print("\n");

//Exercise 4 - Add Thick Black Line to Bottom of Owen

var image = new SimpleImage("astrachan.jpg");
for (var pixel of image.values()){
    if(pixel.getY()>350){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}

print(image);
print("\n");

//Exercise 5 - Green square in top left corner
var image = new SimpleImage("chapel.png");
for (var pixel of image.values()){
    if (pixel.getX()<=50 && pixel.getY()<=50){
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(image);

//Exercise 6 - Rectangle of any color in top right corner
function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
    var width = someImage.getWidth() - cornerWidth;
    var image = new SimpleImage(someImage);
    for(var pixel of image.values()){
        if(pixel.getX()>width && pixel.getY()<=cornerHeight){
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return image;
}
var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
print(result2);

//Exercise 7 - Changes in Red

function changeRed(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    for(var pixel of picture.values()){
        if(pixel.getX()==1){
            pixel.setRed(0);
        }
        else{
            pixel.setRed(pixel.getX()-1);
        }
    }
    return picture;
}

var result = changeRed(256,200);
print(result);

//OPTIONAL: ONE CHANGE

function changeColor(width, height, blue, green) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    for(var pixel of picture.values()){
        if(pixel.getX()==1){
            pixel.setRed(0);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
        else{
            pixel.setRed(pixel.getX()-1);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
    return picture;
}

var result = changeColor(256,200,100,200);
print(result);
