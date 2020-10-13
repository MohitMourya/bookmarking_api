const express = require('express');
const router = express.Router();

const bookmarkController = require('../controllers/bookmarks');

//App Endpoints
router.post('', bookmarkController.createBookmark);
router.get('', bookmarkController.getBookmarks);
router.delete('/:url', bookmarkController.deleteBookmark);
router.put('/add/:id', bookmarkController.addTag);
router.put('/remove/:id', bookmarkController.removeTag);

module.exports = router;
