const index = require('./src/index')

module.exports = function(req,res){
    switch (req.url) {
        case '/':
            //se va a acceder al homepage
            index.homePage(req,res)//metodo
            break;
        case '/en-cartelera':
            //se va a acceder a la cartelera
            index.enCartelera(req,res)
            break;
<<<<<<< HEAD
        case '/contacto' :
            index.contacto(req,res)
           break;
=======
        case '/mas-votadas':
            //se va a acceder a la cartelera
            index.masVotadas(req,res)
            break;    
>>>>>>> 920eda0d9fd1ab345c69963894044d5c31717c7a
        default:
            break;
    }
}


