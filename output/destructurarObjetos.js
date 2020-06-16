"use strict";

var usuario = {
  nombre: 'John Doe',
  edad: 33,
  pais: 'Mexico',
  correo: 'mail@nomail.com'
};

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      pais = _ref.pais,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'bombero' : _ref$profesion;
  console.log("".concat(nombre, " es de ").concat(pais, " y su profesion es ").concat(profesion));
};

mostrarInfo(usuario);