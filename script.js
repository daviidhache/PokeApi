

window.onload=inicio;
var caja = document.getElementById("cajaPadre");
var cabecera = document.getElementById("cabecera");
caja.style.display ="grid";
// Para controlar la extension 
caja.style.gridTemplateColumns = "repeat(auto-fill, minmax(100px, 1fr))"
var imgCabecera = document.createElement("img");
imgCabecera.src = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
cabecera.appendChild(imgCabecera);



function inicio(){
    let intervalo = setInterval(x,1000);

    function x(){
        let num = Math.floor(Math.random() * 200);
        cargarImagenes(num);
    }

}

 async function cargarImagenes(aleatorio){
    
   
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`);
    const dato = await respuesta.json();
        let imagen = document.createElement("img");
        imagen.src = dato.sprites.front_default;
        imagen.addEventListener("click",nombre);
        caja.appendChild(imagen);
        function nombre(){
            alert(dato.name);
        }
            

}  

