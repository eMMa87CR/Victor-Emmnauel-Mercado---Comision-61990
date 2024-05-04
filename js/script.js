// Lista de productos ejemplo
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 500 }
];

function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach((producto) => {
        const div = document.createElement('div');
        div.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>`;
        contenedorProductos.appendChild(div);
    });
}

const carrito = [];

function agregarAlCarrito(productId) {
    const producto = productos.find(prod => prod.id === productId);
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = ''; // Limpiar carrito para actualizar
    carrito.forEach((producto, index) => {
        const div = document.createElement('div');
        div.innerHTML = `${producto.nombre} - $${producto.precio} <button onclick="eliminarDelCarrito(${index})">Eliminar</button>`;
        contenedorCarrito.appendChild(div);
    });
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});


