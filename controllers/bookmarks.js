const Bookmark = require('../models/bookmarks');
const { v4: uuidv4 } = require('uuid');

//Create bookmark
exports.createBookmark = (req, res, next) => {
    const bookmark = new Bookmark({
        id: uuidv4(),
        url: req.body.url,
        title: req.body.title,
        time_created: Math.round(Date.now() / 1000),
        time_updated: Math.round(Date.now() / 1000),
        publisher: req.body.publisher,
        tags: req.body.tags
    });
    bookmark.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(201).json({
        message: "Bookmark Created",
        createdBookmark: bookmark
    });
}

//Retrieve all bookmarks
exports.getBookmarks = (req, res) => {
    Bookmark.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

//Delete a bookmark
exports.deleteBookmark = (req, res) => {
    const url = req.params.url;
    Bookmark.remove({url: url})
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

//Add tag to a bookmark
exports.addTag = (req, res) => {
    const id = req.params.id;

    Bookmark.findByIdAndUpdate(id, { $push: req.body, $set: {time_updated: Math.round(Date.now() / 1000)} })
        .exec()
        .then(doc => {
            if (!doc) {
                res.status(404).json({
                    message: `Bookmark with ID=${id} not found.`
                });
            } else {
                res.status(200).json({
                    message: 'Updated Sucessfully!'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}
//Remove tag from a bookmark
exports.removeTag = (req, res) => {
    const id = req.params.id;
    const tag = req.body.tags;

    Bookmark.findByIdAndUpdate(id, { $pull: { tags: { $in: tag}}, $set: {time_updated: Math.round(Date.now() / 1000)} })
        .exec()
        .then(doc => {
            if (!doc) {
                res.status(404).json({
                    message: `Bookmark with ID=${id} not found.`
                })
            } else {
                res.status(200).json({
                    message: 'Tag removed!'
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}