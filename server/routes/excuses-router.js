const express = require('express')

const ExcusesController = require('../controllers/excuses-controller')

const router = express.Router()

router.post('/create-excuse', ExcusesController.createExcuse)
router.get('/get-all-excuses', ExcusesController.getAllExcuses)
router.get('/excuse/:id', ExcusesController.getExcuseById)

module.exports = router