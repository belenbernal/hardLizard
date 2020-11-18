const homePage = require('./homepage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
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
    contacto: function (req, res) {
        res.write(contacto.contacto())
        //res.write("Contáctanos\n\n")
        res.end()
    },
}