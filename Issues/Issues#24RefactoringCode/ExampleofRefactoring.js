/*function evaluarUsuario(usuario) {
  if (usuario.activo) {
    if (usuario.verificado) {
      if (usuario.saldo > 0) {
        return "Acceso concedido";
      } else {
        return "Saldo insuficiente";
      }
    } else {
      return "Usuario no verificado";
    }
  } else {
    return "Usuario inactivo";
  }
}*/

//Refactoring the above code

function evaluarUsuario(usuario) {
    if (!usuario.activo) return "Usuario inactivo";
    if (!usuario.verificado) return "Usuario no verificado";
    if (usuario.saldo <= 0) return "Saldo insuficiente";
    return "Acceso concedido";
}
 console.log(evaluarUsuario({ activo: true, verificado: true, saldo: 100 })); // Acceso concedido

