const express = require('express')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/users';
        this.middlewares();
        this.routes();
    }

    //Creamos un middleware
    middlewares(){
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);
        });
    }

}

module.exports = Server;