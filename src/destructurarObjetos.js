const usuario = {
    nombre: 'John Doe',
    edad: 33,
    pais: 'Mexico',
    correo: 'mail@nomail.com'
};

const mostrarInfo = ( {nombre, pais, profesion = 'bombero'}) => {
    console.log(`${nombre} es de ${pais} y su profesion es ${profesion}`);
}

mostrarInfo(usuario);