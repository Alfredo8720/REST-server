//Desestructuramos la funcion de express
const {response} = require('express');
 
const usuariosGET = (req, res = response) => {
    res.json({
        msg: 'GET API - Controller'
    });
}

const usuariosPOST = (req, res = response) => {
    res.json({
        msg: 'POST API - Controller'
    });
}

const usuariosPUT = (req, res = response) => {
    res.json({
        msg: 'PUT API - Controller'
    });
}

const usuariosPATCH = (req, res = response) => {
    res.json({
        msg: 'PATCH API - Controller'
    });
}

const usuariosDELETE = (req, res = response) => {
    res.json({
        msg: 'DELETE API - Controller'
    });
}

module.exports = {
    usuariosGET,
    usuariosPUT,
    usuariosPOST,
    usuariosPATCH,
    usuariosDELETE
}