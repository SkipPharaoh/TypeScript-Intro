// Variables //
var a = "1";
console.log("aaa", a);
var hello = "world";
// Functions //
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Skip", "Lessons"));
var user = {
    name: "Skip",
    age: 30,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.name);
var popularTags = ['dragon', 'tea'];
var dragonsTag = 'dragon';
var usename = "alex";
var pageName = '1';
var errorMessage = null;
var thisUser = null;
var someProp;
// Any / Void / Never / Unknown //
// void
var doSomething = function () {
    console.log('doSomething');
};
var example1 = null || undefined;
// any
var example2 = 'Any type of datatype'; // avoid this data type at all cost
// never
var example3; // usually used in libraries and/or functions. a function returning 'never' cannot have a reachable end point.
var doNothing = function () {
    throw 'never';
};
// unknown
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
console.log(vAny.foo());
// type assertion -> converting one type to another type
var s2 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
// Working with DOM //
var someElement = document.querySelector('.foo'); // as HTMLInputElement
// console.log('someElement', someElement.value)
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
