// write your code here

//Creating variables
var x = 3;
var y = 4;
var z = x + 2 * y;
//Printing the values of the variables
print(x);
print(y);
print(z);
print("\n");

//Changing the value of an already existing variable
y=x;
print(x);
print(y);
print("\n");

//Creating an image variable
var image = new SimpleImage("smallpanda.png");
var width = image.getWidth();
var height = image.getHeight();
var pixel = image.getPixel(0,0);
var red = image.getRed(0,0);
var green = image.getGreen(0,0);
var blue = image.getBlue(0,0);
//Printing the values for the image variable
print(image);
print(width);
print(height);
print(pixel);
print(red);
print(green);
print(blue);
print("\n");

//Square function
function square(x){
    var ans = x*x;
    return ans;
}
var y=square(4);
print(y);
print(square(1));
print(square(2));
print(square(3));
print("\n");

//Cube Function
function cube(x){
    return x*x*x;
}
print(cube(1));
print(cube(2));
print(cube(3));
print("\n");

//Add three numbers together
function addThreeNumbers(x,y,z){
    return x+y+z;
}
print(addThreeNumbers(1,2,3));
print(addThreeNumbers(4,5,6));
print(addThreeNumbers(7,8,9));
print("\n");

//Concatenation
function concat(x,y){
    var x=x+"";
    var y=y+"";
    var con=x+y;
    return con;
}
print(concat(1,2));
print(concat(3,4));
print(concat(5,6));
print("\n");

//Width and Height
function widthHeight(x){
    var width= x.getWidth();
    var height= x.getHeight();
    print(width);
    print(height);
}
widthHeight(image);
