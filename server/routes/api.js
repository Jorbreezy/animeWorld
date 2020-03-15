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

router.get('/manga/:id', fileController.infoForManga, (req, res) => {
    res.status(200).json(res.locals.info);
});

router.get('/anime/:id', fileController.infoForAnime, (req, res) => {
    res.status(200).json(res.locals.info)
})

module.exports = router;