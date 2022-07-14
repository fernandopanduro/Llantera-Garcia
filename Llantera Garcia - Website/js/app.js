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