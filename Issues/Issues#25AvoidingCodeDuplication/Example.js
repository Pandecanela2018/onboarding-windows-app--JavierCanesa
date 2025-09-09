/*Base = 5;
height = 10;
Area = (Base * height) ;
console.log("Area of triangle: " + Area);

Base = 7;
height = 12;
Area = (Base * height) ;
console.log("Area of triangle: " + Area);

Base = 10;
height = 15;
Area = (Base * height) ;
console.log("Area of triangle: " + Area);
*/

//refactored code

function calculateArea(base, height) {
    return (base * height);
}

console.log("Area of triangle: " + calculateArea(5, 10));
console.log("Area of triangle: " + calculateArea(7, 12));
console.log("Area of triangle: " + calculateArea(10, 15));