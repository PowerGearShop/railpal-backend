const express = require('express');
const multer = require('multer');
const { extractText } = require('../controllers/ocrController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route to handle OCR upload
router.post('/upload', upload.single('image'), extractText);

module.exports = router;
