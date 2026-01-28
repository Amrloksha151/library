const myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("This cannot be used outside object contexts. Please use it with the 'new' constructor.")
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  if (typeof pages !== 'number') {
    throw Error("Number of pages should be of type 'number'.")
  } else if (typeof read !== 'boolean') {
    throw Error("Read property should be of type 'boolean'.")
  }
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
