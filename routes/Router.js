const Controller = require("../controller/controller")

const router = require("express").Router()

router.get('/signin',Controller.signin)



module.exports = router
