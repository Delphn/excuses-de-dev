const express = require('express');

const ExcusesController = require('../controllers/excuses-controller')

const router = express.Router()

router.get('/excuses', ExcusesController.getAllExcuses)
router.post('/excuse', ExcusesController.createExcuse)
router.get('/excuse/:id', ExcusesController.getExcuseById)

module.exports = router