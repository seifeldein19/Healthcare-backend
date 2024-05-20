const { getAllbloodbankHandler, addblodbankHander } = require('../bloodbankcontrollers/bloodbank.controller')

const router = require('express').Router()


router.post('/bloodbank',addblodbankHander)
router.get('/bloodbank',getAllbloodbankHandler)

module.exports = router