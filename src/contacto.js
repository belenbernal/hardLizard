//const http = require('http');
//const fs = require('fs');

const contato = require('./contacto');

module.exports = {
    contacto : function(req,res){
    res.write('Contáctanos!');
    res.write ('\n\n')
    res.write(`​¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.`)
    }
};