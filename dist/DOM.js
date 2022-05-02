// Working with DOM //
var someElement = document.querySelector('.foo'); // as HTMLInputElement
// console.log('someElement', someElement.value)
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
