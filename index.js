document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello World!");

    const firstBtn = document.getElementById("first-btn");
    const secondBtn = document.getElementById("second-btn");
    const counterTag = document.getElementById("counter");
    let i = 0;
    firstBtn.addEventListener('click', () => {
        console.log("You clicked the first button!");
        i++;
        counterTag.innerHTML = i;
    });

    secondBtn.addEventListener('click', () => {
        console.log("You clicked the first button!");
        i--;
        counterTag.innerHTML = i;
    });
});
