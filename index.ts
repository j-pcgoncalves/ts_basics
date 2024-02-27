// Boolean
let isCool: boolean = true;

// Number
let age: number = 56;

// String
let eyeColor: string = "Brown";
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// Array
let pets: string[] = ["Cat", "Dog", "Pig"];
let pets2: Array<string> = ["Lion", "Dragon", "Lizard"];

// Object
let wizard: object = {
    a: "John"
};

// Null and Undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ["basketball", 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 };
let sizeName: number = Size.Small;

// Any - !!!!!!!!!!!!!! NOT RECOMMENDED
let whatever: any = "aghhhhhhhhhhhhhhhhhhhh noooooooooooooo!!!";
whatever = basket;

// Void
let sing = (): void => {
    console.log("lalalala");
};

// Never
let error = (): never => {
    throw Error("ooops");
};