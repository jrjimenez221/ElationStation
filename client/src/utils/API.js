import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  
// url/station/twitter/home
  searchTweets: function(screenName) {
    return axios.post("/twitter", screenName);
  },

  

  // How does this connect to the database 
  signIn: function(formData) {
    return axios.post("/api/signIn", formData);
  },
  //Would I change the api/books like this. Does it affect anything? 
  signUp: function(formData) {
    return axios.post("/api/account", formData);
  }
};
