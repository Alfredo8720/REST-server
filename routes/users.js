const {Router} = require('express');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosPATCH, usuariosDELETE } = require('../controller/users');
const router = Router();

router.get('/', usuariosGET);

router.post('/', usuariosPOST);

router.put('/', usuariosPUT);

router.delete('/', usuariosPATCH);

router.patch('/', usuariosDELETE);

module.exports = router;