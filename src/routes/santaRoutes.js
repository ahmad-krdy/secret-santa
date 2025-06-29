const express = require('express');
const multer = require('multer');
const SantaController = require('../controllers/santaController');

const router = express.Router();
const upload = multer({dest:'uploads/'});

router.post('/upload',upload.fields([
    {name:"employees",maxCount:1},
    {name:"previous", maxCount:1}
]),SantaController .process);

router.get('/download',SantaController.download);



module.exports = router;