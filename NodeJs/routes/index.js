const router = require("express").Router();
const weedo= require('./weedo')



router.get('/test', (req, res) => {
    console.log('hello from /api')
    res.send({
        success: true,
        data: "hello from /api route"
    });
});

module.exports = router;
