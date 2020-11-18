const homePage = require('./homepage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const contacto = require('./contacto');

module.exports = {
    homePage : function(req,res){
        //voy a mostar la informacion (yo no la proceso)
        res.write(`Total de Peliculas: ${homePage.leerJSON().total_movies} \n\n`)
        let movies = homePage.leerJSON()
        movies.movies.forEach(movie => {
           res.write(movie.title + '\n')
        })
        res.end()
    },
    enCartelera : function(req,res){
        //titulo
        res.write('----En cartelera----\n\n')
        //cantidad de peliculas
        res.write(`Total de Peliculas: ${enCartelera.leerJSON().total_movies} \n\n`)
        //listado de peliculas con titulo y reseña
        let movies = enCartelera.leerJSON()
        movies.movies.forEach(movie => {
           res.write('-Titulo: '+ movie.title + '\n')
           res.write('-Reseña: '+ movie.overview + '\n\n')})
        res.end()
    },
    masVotadas : function(req,res){
        let votadas = masVotadas.masVotadas()
        res.write("Más votadas\n\n")
        res.write("Rating promedio: " + masVotadas.ratingPromedio() + "\n\n")
        votadas.forEach(movie => {
            res.write("Título: " + movie.title + "\n");
            res.write("Descripción : " + movie.overview + "\n");
            res.write("Rating: " + movie.vote_average + "\n\n");
        })
        res.end()
    },
    contacto : function(req,res){
        res.write('Contáctanos!');
        res.write ('\n\n')
        res.write(`​¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.`)
        res.end()
    }  
    }