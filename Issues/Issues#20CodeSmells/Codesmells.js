
//1- Magic Numbers & Strings – Using hardcoded values instead of constants.
function calcularDescuento(precio) {
  if (precio > 100) {
    return precio * 0.9; // 10% de descuento
  } else if (precio > 50) {
    return precio * 0.95; // 5% de descuento
  }
  return precio;
}
function saludar(usuario) {
  if (usuario === "admin") {
    return "Bienvenido, administrador";
  }
  return "Bienvenido, usuario";
}
console.log(calcularDescuento(120)); // 108
console.log(saludar("admin")); // Bienvenido, administrador

/*
Refactor

const UMBRAL_DESCUENTO_ALTO = 100;
const UMBRAL_DESCUENTO_BAJO = 50;
const DESCUENTO_ALTO = 0.9;  // 10% de descuento
const DESCUENTO_BAJO = 0.95; // 5% de descuento
const ROL_ADMIN = "admin";
const MENSAJE_ADMIN = "Bienvenido, administrador";
const MENSAJE_USUARIO = "Bienvenido, usuario";
function calcularDescuento(precio) {
  if (precio > UMBRAL_DESCUENTO_ALTO) {
    return precio * DESCUENTO_ALTO;
  } else if (precio > UMBRAL_DESCUENTO_BAJO) {
    return precio * DESCUENTO_BAJO;
  }
  return precio;
}
function saludar(usuario) {
  if (usuario === ROL_ADMIN) {
    return MENSAJE_ADMIN;
  }
  return MENSAJE_USUARIO;
}
console.log(calcularDescuento(120)); // 108
console.log(saludar("admin")); // Bienvenido, administrador
*/

/*
2-Long Functions – Functions that do too much and should be broken into smaller parts.

Code smell

function procesarPedido(pedido) {
  // Validar pedido
  if (!pedido.cliente) {
    throw new Error("Cliente no especificado");
  }
  if (!pedido.items || pedido.items.length === 0) {
    throw new Error("No hay items en el pedido");
  }

  // Calcular total
  let total = 0;
  for (let item of pedido.items) {
    total += item.precio * item.cantidad;
  }

  // Aplicar descuento
  if (pedido.cliente.vip) {
    total *= 0.9; // 10% descuento
  }

  // Generar factura
  const factura = `Factura para ${pedido.cliente.nombre}\nTotal: $${total.toFixed(2)}`;

  // Enviar factura (simulado)
  console.log("Enviando factura...");
  console.log(factura);

  return factura;
}


Refactor

function validarPedido(pedido) {
  if (!pedido.cliente) {
    throw new Error("Cliente no especificado");
  }
  if (!pedido.items || pedido.items.length === 0) {
    throw new Error("No hay items en el pedido");
  }
}

function calcularTotal(items, esVip) {
  let total = 0;
  for (let item of items) {
    total += item.precio * item.cantidad;
  }
  if (esVip) {
    total *= 0.9;
  }
  return total;
}

function generarFactura(cliente, total) {
  return `Factura para ${cliente.nombre}\nTotal: $${total.toFixed(2)}`;
}

function enviarFactura(factura) {
  console.log("Enviando factura...");
  console.log(factura);
}

function procesarPedido(pedido) {
  validarPedido(pedido);
  const total = calcularTotal(pedido.items, pedido.cliente.vip);
  const factura = generarFactura(pedido.cliente, total);
  enviarFactura(factura);
  return factura;
}

*/

/*
3-Duplicate Code – Copy-pasting logic instead of reusing functions.

Code smell

function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function imprimirAreaRectangulo(ancho, alto) {
  const area = ancho * alto;
  console.log(`Área del rectángulo: ${area}`);
}

function imprimirAreaCuadrado(lado) {
  const area = lado * lado;
  console.log(`Área del cuadrado: ${area}`);
}

 Refactor
function calcularAreaRectangulo(ancho, alto) {
  return ancho * alto;
}

function calcularAreaCuadrado(lado) {
  return calcularAreaRectangulo(lado, lado);
}

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function imprimirArea(nombre, area) {
  console.log(`Área del ${nombre}: ${area}`);
}

imprimirArea("rectángulo", calcularAreaRectangulo(5, 10));
imprimirArea("cuadrado", calcularAreaCuadrado(5));

*/


/*
4-Large Classes (God Objects) – Classes that handle too many responsibilities.

 Code smell

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }

  validarEmail() {
    // lógica para validar email
  }

  guardarEnBaseDeDatos() {
    // lógica para guardar usuario
  }

  enviarEmailBienvenida() {
    // lógica para enviar email
  }

  calcularEdad(fechaNacimiento) {
    // lógica para calcular edad
  }
}


Refactor

class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class ValidadorEmail {
  static validar(email) {
    // lógica para validar email
    return /\S+@\S+\.\S+/.test(email);
  }
}

class RepositorioUsuario {
  static guardar(usuario) {
    // lógica para guardar usuario
  }
}

class ServicioEmail {
  static enviarBienvenida(email) {
    // lógica para enviar email
  }
}

class Utilidades {
  static calcularEdad(fechaNacimiento) {
    const diff = Date.now() - fechaNacimiento.getTime();
    const edad = new Date(diff).getUTCFullYear() - 1970;
    return edad;
  }
}



/*


5-Deeply Nested Conditionals – Complex if/else trees that make code harder to follow.

 Code smell

function obtenerDescuento(cliente) {
  if (cliente) {
    if (cliente.vip) {
      if (cliente.antiguedad > 5) {
        return 0.2;
      } else {
        return 0.1;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}


Refactor
function obtenerDescuento(cliente) {
  if (!cliente) return 0;
  if (!cliente.vip) return 0;
  if (cliente.antiguedad > 5) return 0.2;
  return 0.1;
}

*/

/*
6-Commented-Out Code – Unused code that clutters the codebase.

Code smell

function saludar() {
  // console.log("Hola mundo");
  console.log("Hola usuario");
}


Refactor

function saludar() {
  console.log("Hola usuario");
}

*/

/*
7-Inconsistent Naming – Variable names that don't clearly describe their purpose.

code smell

let a = 10;
let b = 20;

function suma(x, y) {
  return x + y;
}

let resultado = suma(a, b);
console.log(resultado);

 Refactor
 
let ancho = 10;
let alto = 20;

function sumar(val1, val2) {
  return val1 + val2;
}

let resultadoSuma = sumar(ancho, alto);
console.log(resultadoSuma);

*/