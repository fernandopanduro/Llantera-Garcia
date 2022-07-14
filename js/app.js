/* Menu HAMBURGUESA */

//Click en el menu para activar la funcion
document.querySelector(".bars__menu").addEventListener("click" , animateBars);



var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var container__menu = document.querySelector(".container__menu-desplegable");


//Inicializar la funcion
function animateBars() {
    //Intercala entre los distintas clases del bars menu
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    //Intercala entre los dirversos estados del contener del menu desplegable
    container__menu.classList.toggle("activecontainer__menu-desplegable");
}


/* CARROUSEL */

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//Recorrer todos los puntos
punto.forEach( (cadaPunto , i )=> {
    //Asignar un click a cadaPunto
    punto[i].addEventListener('click', ()=> {

        //Guardar la posicion de ese punto 
        let posicion  = i;
        //Calcular es el espacio que debe deszplazar el grande
        let operacion = posicion * -50;

        //Mover el grande
        grande.style.transform = `translateX(${ operacion }%)`;

        //Recorrer todos los puntos
        punto.forEach( (cadaPunto , i)=>{
            //Remover la clase activo a todos
            punto[i].classList.remove('activo');
        } )
        //Anadir la clase activo al punto seleccionado
        punto[i].classList.add('activo')

    } );
} )