const homePage = require('./homepage');
const enCartelera = require('./enCartelera');

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
           res.write('-Reseña: '+ movie.overview + '\n\n')
        })
        res.end()
    }
}