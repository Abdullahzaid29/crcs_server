const Controller = require("../controller/controller")

const router = require("express").Router()

router.get('/user',Controller.user)



module.exports = router
