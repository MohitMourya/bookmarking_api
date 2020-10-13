const express = require('express');
const router = express.Router();

const TagController = require('../controllers/tags')

//App Endpoints
router.post('', TagController.createTag);
router.get('', TagController.getTag);
router.delete('/:title', TagController.deleteTag);

module.exports = router;