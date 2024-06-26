// Functional types follow this format: (args?) => return type
interface Car {
	make: string;
	model: string;
	// One argument, with return value
	accelerate: (amount: number) => number;

	// No arguments, return value
	getMileage: () => number;

	// One argument, no return value
	setSpeed: (speed: number) => void;
}

// Functional types can be defined standalone
type CalculateFn = (x: number, y: number) => number;

/*
There are three ways to declare functions in JavaScript

Functional declarations: you can't type these in TypeScript
function foo(args) { }

Functional assignment
let fn = function(args) {}

Arrow functions
let arrowFn = () => {};

Typing functional declarations is different from the other two
 */

// Typing functional assignments
let assignmentSubtraction: CalculateFn = function (x, y) {
	return x - y;
};

// Typing arrow functions
let arrowMultiplication: CalculateFn = (x, y) => x * y;
