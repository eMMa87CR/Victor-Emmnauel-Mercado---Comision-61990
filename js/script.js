alert(
  "Hola, Bienvenid@ a la tienda de productos. Presiona Enter para continuar."
);

console.log("Hola, Bienvenid@ a la tienda de productos.");

const productos = [
  { id: 1, nombre: "Producto 1", precio: 100 },
  { id: 2, nombre: "Producto 2", precio: 300 },
  { id: 3, nombre: "Producto 3", precio: 400 },
];

const carrito = [];

function agregarAlCarrito(productId) {
  const producto = productos.find((p) => p.id === productId);
  if (producto) {
    carrito.push(producto);
    console.log(
      `Agregado al carrito: ${producto.nombre} por $${producto.precio}`
    );
  } else {
    console.log("Producto no encontrado");
  }
}

function eliminarDelCarrito(productId) {
  const index = carrito.findIndex((p) => p.id === productId);
  if (index !== -1) {
    carrito.splice(index, 1);
    console.log("Producto eliminado del carrito");
  } else {
    console.log("Producto no encontrado en el carrito");
  }
}

function mostrarCarrito() {
  if (carrito.length === 0) {
    console.log("El carrito está vacío");
  } else {
    carrito.forEach((producto) => {
      console.log(`Producto: ${producto.nombre}, Precio: $${producto.precio}`);
    });
  }
}

function verTotalCarrito() {
  const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
  console.log(`Total del Carrito: $${total}`);
}

function main() {
  let continuar = true;
  while (continuar) {
    const accion = prompt(
      "Ingrese acción (agregar, eliminar, verCarrito, verTotal, salir):"
    );
    switch (accion) {
      case "agregar":
        const idAgregar = parseInt(prompt("Ingrese ID del producto a agregar"));
        agregarAlCarrito(idAgregar);
        break;
      case "eliminar":
        const idEliminar = parseInt(
          prompt("Ingrese ID del producto a eliminar del carrito")
        );
        eliminarDelCarrito(idEliminar);
        break;
      case "verCarrito":
        mostrarCarrito();
        break;
      case "verTotal":
        verTotalCarrito();
        break;
      case "salir":
        continuar = false;
        break;
      default:
        console.log("Acción no válida");
        break;
    }
  }
}

main();
