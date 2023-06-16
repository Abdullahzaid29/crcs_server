const Controller = require("../controller/controller")

const router = require("express").Router()

router.post('/signin',Controller.signin)



module.exports = router
