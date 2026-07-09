// ===============================
// BASE DE DATOS DE PRODUCTOS
// ===============================

const productos = {

    hombre1: {
        imagen: "./img/productos/moda/producto1.jpeg",
        nombre: "Conjunto Casual Elegante Hombre",
        precio: "$24.99",
        descripcion:
        "Conjunto de dos piezas de moda casual para hombre. Incluye camiseta de manga corta y pantalón a juego. Diseño moderno, cómodo, ligero y transpirable, ideal para uso diario, salidas casuales y viajes.",
        tallas: ["XL", "XXXL"]
    },


    mujer1: {
        imagen: "./img/productos/moda/producto2.jpeg",
        nombre: "Conjunto Blanco Elegante Mujer",
        precio: "$29.99",
        descripcion:
        "Conjunto elegante para mujer con cuello cuadrado, cintura ceñida y corte en A. Diseño versátil ideal para trabajo, reuniones o actividades informales. Cómodo y con estilo moderno y femenino.",
        tallas: ["XS", "S", "M", "L"]
    },


    vestido1: {
        imagen: "./img/productos/moda/producto3.jpeg",
        nombre: "Vestido Corto Rojo",
        precio: "$19.99",
        descripcion:
        "Vestido asimétrico con volantes y detalles metálicos. Diseño minimalista de verano para la moda femenina, ideal para crear un estilo elegante y moderno.",
        tallas: ["L", "XXL"]
    },


    audifonos1: {
        imagen: "./img/productos/electronica/imagen1.jpeg",
        nombre: "Audífonos Inalámbricos",
        precio: "$10.00",
        descripcion:
        "Audífonos inalámbricos con diseño moderno, cómodos y prácticos para música y llamadas.",
        tallas: []
    },


    reloj1: {
        imagen: "./img/productos/electronica/imagen2.jpeg",
        nombre: "Smart Watch con Audífonos",
        precio: "$25.00",
        descripcion:
        "Reloj inteligente con audífonos incluidos para actividad diaria y entretenimiento.",
        tallas: []
    },


    bateria1: {
        imagen: "./img/productos/electronica/imagen3.jpeg",
        nombre: "Batería Recargable",
        precio: "$30.00",
        descripcion:
        "Batería portátil recargable ideal para mantener tus dispositivos con energía.",
        tallas: []
    }

};




// ===============================
// CARGAR PRODUCTO
// ===============================


const url = new URLSearchParams(window.location.search);

const id = url.get("id");


const producto = productos[id];



if(producto){


    document.getElementById("imagenProducto").src = producto.imagen;


    document.getElementById("nombreProducto").textContent =
    producto.nombre;


    document.getElementById("precioProducto").textContent =
    "Precio: " + producto.precio;


    document.getElementById("descripcionProducto").textContent =
    producto.descripcion;



    const contenedorTallas = document.getElementById("tallas");


    contenedorTallas.innerHTML = "";



    if(producto.tallas.length > 0){


        producto.tallas.forEach(function(talla){


            const boton = document.createElement("button");


            boton.textContent = talla;


            boton.onclick = function(){


                document.querySelectorAll("#tallas button")
                .forEach(btn => btn.classList.remove("seleccionado"));


                boton.classList.add("seleccionado");


            };


            contenedorTallas.appendChild(boton);


        });



    }else{


        contenedorTallas.textContent =
        "No aplica talla";


    }


}






// ===============================
// CONTROL DE CANTIDAD
// ===============================


let cantidad = 1;


const cantidadTexto = document.getElementById("cantidad");



document.getElementById("mas").onclick = function(){


    cantidad++;


    cantidadTexto.textContent = cantidad;


};



document.getElementById("menos").onclick = function(){


    if(cantidad > 1){


        cantidad--;


        cantidadTexto.textContent = cantidad;

        // ===============================
// BOTON AGREGAR AL CARRITO
// ===============================


let tallaSeleccionada = "";



// seleccionar talla

document.querySelectorAll(".tallas button").forEach(boton => {


    boton.onclick = function(){


        tallaSeleccionada = boton.textContent;


        document.querySelectorAll(".tallas button")
        .forEach(btn => btn.classList.remove("seleccionada"));


        boton.classList.add("seleccionada");


    };


});




// agregar producto

document.querySelector(".agregar-carrito").onclick = function(){



    if(producto.tallas.length > 0 && tallaSeleccionada === ""){


        alert("Selecciona una talla antes de agregar al carrito");


        return;


    }



    const productoCarrito = {


        imagen: producto.imagen,


        nombre: producto.nombre,


        precio: producto.precio,


        talla: tallaSeleccionada || "No aplica",


        cantidad: cantidad


    };




    agregarAlCarrito(productoCarrito);



};


    }


};