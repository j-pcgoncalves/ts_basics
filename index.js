// Boolean
var isCool = true;
// Number
var age = 56;
// String
var eyeColor = "Brown";
var favouriteQuote = "I'm not old, i'm only ".concat(age);
// Array
var pets = ["Cat", "Dog", "Pig"];
var pets2 = ["Lion", "Dragon", "Lizard"];
// Object
var wizard = {
    a: "John"
};
// Null and Undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ["basketball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size.Small;
// Any - !!!!!!!!!!!!!! NOT RECOMMENDED
var whatever = "aghhhhhhhhhhhhhhhhhhhh noooooooooooooo!!!";
whatever = basket;
// Void
var sing = function () {
    console.log("lalalala");
};
// Never
var error = function () {
    throw Error("ooops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT!!");
};
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!!");
};
var dog = {};
dog.count;
