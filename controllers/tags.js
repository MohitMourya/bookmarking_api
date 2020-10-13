const Tag = require('../models/tags');
const { v4: uuid4 } = require('uuid');

//Create tag
exports.createTag = (req, res) => {
    const tag = new Tag({
        id: uuid4(),
        title: req.body.title,
        time_created: Math.round(Date.now() / 1000),
        time_updated: Math.round(Date.now() / 1000)
    });
    tag.save().then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
    res.status(201).json({
        message: "Tag Created",
        createdTag: tag
    });
}

//Retrieve all tags
exports.getTag = (req, res) => {
    Tag.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        });
}

//Delete tag
exports.deleteTag = (req, res) => {
    const title = req.params.title;
    Tag.remove({ title: title})
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
