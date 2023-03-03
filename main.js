const gridDom = document.querySelector(".grid");

for(let i = 1; i <= 100; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('click', function() {
        
        //mostra il numero solo se box non è ancora attiva
        if(!this.classList.contains('clicked')) {
            console.log(i);
        }
        this.classList.toggle('clicked');
        
    })
    gridDom.append(box);

}