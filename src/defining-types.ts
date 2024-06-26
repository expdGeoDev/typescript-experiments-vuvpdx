// Explicit types for variables
let expNumber: number = 5;
let expString: string = 'Hello';
let expBoolean: boolean = false;
let expDate: Date = new Date();
let expSet: Set<string> = new Set();

// Implicit types for variables
let impNumber: number = 5;
let impString: string = 'Hello';
let impBoolean: boolean = false;
let impDate: Date = new Date();
let impSet: Set<string> = new Set();

// Generic types aren't explicit; this won't work
// let impSet2: Set = new Set(['apple', 'banana', 'pear'] );

// Object literal typing
// Implicitly typed
let person1 = {
	firstName: 'John',
	lastName: 'Paxton',
};

// In-line object types; prefer interfaces below
let person2: { firstName: string; lastName: string; dateOfBirth: Date } = {
	firstName: 'Jenny',
	lastName: 'Sparks',
	dateOfBirth: new Date(1900, 0, 1),
};

// Define an interface, prefer this to defining in-line or using type, below
interface Person {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
}

// Add to the interface
interface Person {
	middleName: string;
}

// Inherit from the interface
interface Employee extends Person {
	employeeId: number;
}

// Define a type, largely overlaps with interfaces
type PersonType = {
	firstName: string;
	lastName: string;
	dateOfBirth: Date;
};

// Types can define functional types as well
type BasicMathFn = (leftValue: number, rightValue: number) => number;
type PredicateFn = (arg: unknown) => boolean;

// Classes can define a type, and are NOT erased by the compiler
class Book {
	author: string = 'Unknown';
	title: string = 'Not specified';
	pages: number = -1;
}

// Enums can define a type, but are often not the optimal choice
enum Days {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

// Better way to do some enumerations, Union types (see type-options.ts)
type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export {};
