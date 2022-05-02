var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var People = /** @class */ (function () {
    function People(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    People.prototype.changeUnchangableName = function () {
        // this.unchangableName = 'foo';
    };
    People.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    People.maxAge = 50;
    return People;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(People));
var person = new People('Skip', 'Pharaoh');
console.log(person.firstName);
console.log(People.maxAge);
var admin = new Admin('Foo', 'Bar');
console.log(admin.getEditor);
// Generics //
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var some1 = {
    name: 'Jack',
    data: {
        meta: 'foo'
    }
};
// const result = addId<Some1Interface>(some1)
// const result = addId<string>('foo')
// console.log('result', result)
