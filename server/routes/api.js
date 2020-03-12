const express = require('express');
const fs = require('fs');
const fileController = require('../controller/fileController.js');

const router = express.Router();

router.get('/manga', fileController.getManga, (req, res) => {
    res.status(200).json(res.locals.manga);
});

router.get('/anime', fileController.getAnime, (req, res) => {
    res.status(200).json(res.locals.anime)
})

module.exports = router;