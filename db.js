const mongoose = require('mongoose');
const uri = "mongodb+srv://amahchika:ECeuC4OwsrL09yqF@cluster0.wyuoicq.mongodb.net/"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;