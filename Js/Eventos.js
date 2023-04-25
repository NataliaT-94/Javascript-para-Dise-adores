function calcularArea(base, altura) {
    return base * altura;
}
function init(event) {
    

    var zonaResultado = document.querySelector('#resultado>pre');
    console.log(zonaResultado);
    var botonCalcular = document.querySelector('#calcular');
    console.log(botonCalcular);
    botonCalcular.addEventListener('click', function (Event) {
        console.log('click btn');
        var base = document.querySelector('#base').value;
        var altura = document.querySelector('#altura').value;

        zonaResultado.innerHTML = calcularArea(base, altura);
    });

    botonCalcular.addEventListener('mouseover', function (event) {
        event.target.className += ' sobre';
        event.target.innerHTML = 'click';
    } );

    botonCalcular.addEventListener('mouseout', function (event) {
        event.target.className = event.target.className.replace(' sobre', '');
        event.target.innerHTML = 'calcular';
    
    });
}