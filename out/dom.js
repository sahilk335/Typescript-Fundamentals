var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
var sample = document.querySelector(".foo");
sample.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
