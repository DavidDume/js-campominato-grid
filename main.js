const gridDom = document.querySelector(".grid");

for(let i = 0; i < 100; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    gridDom.append(box);
}