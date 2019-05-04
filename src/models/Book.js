const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Book = mongoose.model("Book, BookSchema");

const BookSchema = new Schema({
    title: String,
    authors: [String],
    description: String,
    img: {
        type: {String},
    },
    link: {
        type: String,
    }
});

module.exports = Book;