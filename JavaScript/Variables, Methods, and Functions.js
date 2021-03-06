//Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1, value2, value3) {
    var answer = value1 + " " + value2 + " " + value3;  
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun");
print(result3);
print("\n");

//Exercise 2 - Format a name
function reformatName(first, last) {
    var name = last + ", " + first;
    return name;
}

var result = reformatName("Susan", "Rodger");
print(result);
result = reformatName("Robert", "Duvall");
print(result);
print("\n");

//Exercise 3 - Number of pixels in an image
function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var height = someImg.getHeight(); 
    var width = someImg.getWidth();
    var pixel = height * width;
    return pixel;
}

var result = numberPixels("chapel.png");
print(result);
result = numberPixels("dinos.png");
print(result);
print("\n");

//Exercise 4 - Perimeter of an image
function perimeter(imageName) {
    var image = new SimpleImage(imageName);
    var width = image.getWidth();
    var height = image.getHeight();
    var perimeter = (2*width)+(2*height);
    return perimeter;
}

print(perimeter("rodger.png"));
print("\n");

//Exercise 5 - Print the RGB values of a pixel
function printPixel(nameImage, xpos, ypos) {
    var image = new SimpleImage(nameImage);
    var red = image.getRed(xpos,ypos);
    var blue = image.getBlue(xpos,ypos);
    var green = image.getGreen(xpos,ypos);
    print("Red is "+red+"\n");
    print("Blue is "+blue+"\n");
    print("Green is "+green+"\n");
}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);
print("\n");

//Exercise 6 - Sum of the RGB values for a Pixel
function sumPixel(nameOfImage, xpos, ypos) {
    var image = new SimpleImage(nameOfImage);
    var red = image.getRed(xpos,ypos);
    var green = image.getGreen(xpos,ypos);
    var blue = image.getBlue(xpos,ypos);
    var sum=red+green+blue;
    return sum;
    
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);
