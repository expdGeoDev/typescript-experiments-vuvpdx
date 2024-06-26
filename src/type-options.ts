// Union types allow two or more types
type StringOrNumber = string | number;
let son1: StringOrNumber = 'Hello';
let son2: StringOrNumber = 10;

// Union types can specify limited constant values
type SortDirection = 'ascending' | 'descending';
let direction: SortDirection = 'ascending';

// Union types can be complex to deal with
interface Thing1 {
	alpha: string;
	beta: number;
}

interface Thing2 {
	alpha: string;
	gamma: boolean;
}

function thingProcessor(t: Thing1 | Thing2) {
	// This works because both Thing1 and Thing2 have a property called 'alpha'
	console.log(t.alpha);

	// This would not work, because TS doesn't know if t is a Thing1 or a Thing2
	// console.log(t.beta);

	// Narrow t into Thing1 or Thing2 and you can use the appropriate properties
	if ('beta' in t) {
		console.log(t.beta);
	}

	// 	More on narrowing here: https://www.typescriptlang.org/docs/handbook/2/narrowing.html
}

// Intersection types combine types
type Phone = {
	contacts: string[];
	isDialing: boolean;
	isConnected: boolean;
};

type MusicPlayer = {
	nowPlaying: string;
	artists: string[];
	songs: string[];
};

type MobilePhone = Phone & MusicPlayer;

// Intersection types are a great way to extend an existing type
type User = {
	userName: string;
	userId: number;
};

type UserWithDisplayName = User & {
	displayName: string;
};

// Use "?" to make a property optional
interface Person {
	firstName: string;
	// ? makes a property optional
	middleName?: string;
	lastName: string;
	dateOfBirth: Date;
	age?: number;
}

let p1: Person = {
	firstName: 'Jenny',
	lastName: 'Sparks',
	dateOfBirth: new Date(),
	age: 25,
};

// Index signatures allow objects to expand their properties
interface Address {
	street: string;
	city: string;
	country: string;

	// "otherProps" can be anything, usually it's "key"
	[otherProps: string]: string;
}

let a1: Address = {
	street: '123 Anywhere St',
	city: 'Nutley',
	country: 'US',
	county: 'Essex',
	state: 'New Jersey',
};

// But index types have to encompass all possible types in an object as a union type
interface ExtendablePerson {
	lastName: string;
	dateOfBirth: Date;
	id: number;

	[key: string]: string | number | Date;
}

export {};
