function msj_salir(){
    //algoritmo de la función
    alert("¡vuelve pronto!")
}
function invitar(){
    var nombre;
    var deseo;
    nombre=prompt("Escribe tu nombre:")
    deseo=prompt("¿Que te gusta comer?")

    alert("¡Hola!"+nombre+"te invito a comer"+deseo)
}
function imagen(){
// Crea un nuevo elemento de imagen 
var img = document.createElement('img'); 
 
// Establece la ubicación de la imagen 
img.src="../Img/vacio.jpg"  ; 
}

function adivinar(){
    var respuesta;
    respuesta=prompt("¿Qué tiene el rey en la panza?")
    
    //sí la respuesta es correcta
       if(respuesta=="ombligo"){
           alert("¡CORRECTO!")  
    }
    //Sino
    else{
        alert("¡ERROR!")
    }

   
}

function link (){
    window.open ("https://youtu.be/TFgvE2y8ACA")
}


function adivinar(){
    var respuesta;
    respuesta=prompt("Tengo cabeza redonda, sin nariz,ni ojos, ni frente, mi cuerpo se compone sólo de blancos dientes")
    
    //sí la respuesta es correcta
       if(respuesta=="El ajo"){
           alert("¡CORRECTO!")  
    }
    //Sino
    else{
        alert("¡ERROR!")
    }
}