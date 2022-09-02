const Excuses = require('../models/excuse-model');

createExcuse = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an excuse',
    })
  }

  const excuse = new Excuses(body)

  if (!excuse) {
    return res.status(400).json({ success: false, error: err })
  }

  excuse
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: excuse._id,
        createdAt: excuse.createdAt,
        updatedAt: excuse.updatedAt,
        __v: excuse.__v,
        message: 'Excuse created!',
      })
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Excuse not created!',
      })
    })
}

getExcuseById = async (req, res) => {
  await Excuses.findOne({ _id: req.params.id }, (err, excuse) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }

    if (!excuse) {
      return res
        .status(404)
        .json({ success: false, error: `Excuse not found` })
    }
    return res.status(200).json({ success: true, data: excuse })
  }).catch(err => console.log(err))
}

getAllExcuses = async (req, res) => {
  await Excuses.find({}, (err, excuses) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!excuses.length) {
      return res
        .status(404)
        .json({ success: false, error: `Excuses not found` })
    }
    return res.status(200).json({ success: true, data: excuses })
  }).catch(err => console.log(err))
}

module.exports = {
  createExcuse,
  getAllExcuses,
  getExcuseById
}