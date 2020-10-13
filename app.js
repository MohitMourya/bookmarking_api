const express = require('express');
const mongoose = require('mongoose');
const bookmarkRoutes = require('./routes/bookmarks');
const tagRoutes = require('./routes/tags');
const MONGO_URI = require('./project_secrets');
const app = express();
app.use(express.json());


//DB Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to Database!');
})
    .catch(() => {
        console.log("Connection Failed!");
    });

//App Routes
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/tag', tagRoutes);

module.exports = app;
