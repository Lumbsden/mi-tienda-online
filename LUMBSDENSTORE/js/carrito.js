// =================================
// CARRITO LUMBSDENSTORE
// =================================

// Obtener carrito guardado
function obtenerCarrito() {

    const carrito = localStorage.getItem("carrito");

    return carrito ? JSON.parse(carrito) : [];

}

// Guardar carrito
function guardarCarrito(carrito) {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

}

// Agregar producto
function agregarAlCarrito(producto) {

    let carrito = obtenerCarrito();

    const productoExistente = carrito.find(item =>
        item.nombre === producto.nombre &&
        item.talla === producto.talla
    );

    if (productoExistente) {

        productoExistente.cantidad += producto.cantidad;

    } else {

        carrito.push(producto);

    }

    guardarCarrito(carrito);

    alert("Producto agregado al carrito 🛒");

}

// Eliminar producto
function eliminarDelCarrito(indice) {

    let carrito = obtenerCarrito();

    carrito.splice(indice, 1);

    guardarCarrito(carrito);

    mostrarCarrito();

}

// Vaciar carrito completo
function vaciarCarrito() {

    if (confirm("¿Deseas vaciar todo el carrito?")) {

        localStorage.removeItem("carrito");

        mostrarCarrito();

    }

}

// Mostrar carrito
function mostrarCarrito() {

    const lista = document.getElementById("listaCarrito");

    if (!lista) {
        return;
    }

    let carrito = obtenerCarrito();

    lista.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {

        lista.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío 🛒
            </p>
        `;

        document.getElementById("totalCarrito").textContent = "$0.00";

        return;

    }

    carrito.forEach((producto, index) => {

        let precioNumero =
            parseFloat(producto.precio.replace("$", ""));

        total += precioNumero * producto.cantidad;

        lista.innerHTML += `

        <div class="item-carrito">

            <img src="${producto.imagen}"
                 alt="${producto.nombre}">

            <div class="info-carrito">

                <h3>${producto.nombre}</h3>

                <p>Talla: ${producto.talla}</p>

                <p>Cantidad: ${producto.cantidad}</p>

                <p>Precio: ${producto.precio}</p>

                <button onclick="eliminarDelCarrito(${index})">
                    Eliminar
                </button>

            </div>

        </div>

        `;

    });

    document.getElementById("totalCarrito").textContent =
        "$" + total.toFixed(2);

}

// Botón continuar compra
document.addEventListener("DOMContentLoaded", () => {

    mostrarCarrito();

    const btnComprar =
        document.getElementById("btnComprar");

    if (btnComprar) {

        btnComprar.addEventListener("click", () => {

            const carrito = obtenerCarrito();

            if (carrito.length === 0) {

                alert("Tu carrito está vacío.");

                return;

            }

            alert(
                "Gracias por tu compra. Próximamente integraremos el pago en línea. 🎉"
            );

        });

    }

});