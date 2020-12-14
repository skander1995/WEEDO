const router = require('express').Router();


module.exports = function (app, io) {
    router.get('/test', (req, res) => {
        res.send({
            success: true,
            data: 'hello from /api/weedo route'
        });
    });
    router.get('/:msg', (req, res) => {
        var msg= req.params.msg
        io.emit('FromAPI',msg)
        res.send({
            success: true,
            data:msg
        });
    });
    app.use('/api/weedo',router);
}