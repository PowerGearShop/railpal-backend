const Tesseract = require('tesseract.js');

/**
 * Controller to extract text from an uploaded image using Tesseract.js.
 * Expects Multer to provide `req.file` with a `path` property.
 */
exports.extractText = async (req, res) => {
  try {
    // Ensure a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;

    // Perform OCR on the uploaded image
    const result = await Tesseract.recognize(filePath, 'eng');
    const text = result?.data?.text || '';

    // TODO: Add logic here to match extracted railcar numbers against
    // customer work lists and return highlighted cars and spots.

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process image' });
  }
};
