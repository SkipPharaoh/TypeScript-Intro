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
