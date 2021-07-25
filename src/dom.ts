const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("someElement", someElement.value);



const sample = document.querySelector(".foo");
sample.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log('event', target.value);
});
