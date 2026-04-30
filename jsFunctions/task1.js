// Task 1: Rectangle area — three ways to declare a function

// 1. Function Declaration
function getRectangleArea(width, height) {
    return width * height;
}

// 2. Function Expression
const getRectangleAreaExpression = function (width, height) {
    return width * height;
};

// 3. Arrow Function
const getRectangleAreaArrow = (width, height) => width * height;

// Function calls with arguments 3 and 12
console.log("Function Declaration:", getRectangleArea(3, 12));
console.log("Function Expression:", getRectangleAreaExpression(3, 12));
console.log("Arrow Function:", getRectangleAreaArrow(3, 12));