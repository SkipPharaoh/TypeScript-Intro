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
