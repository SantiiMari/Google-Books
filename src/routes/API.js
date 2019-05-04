import axios from 'axios';
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchBooks: function(query) {
    return axios.get(URL + query);
  },
  getBooks: function() {
    return axios("/api/books");
  },
  addBooktoDB: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("api/books/" + id)
  }
};
