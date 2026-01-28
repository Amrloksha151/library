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

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function loadBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const BOOK = myLibrary[i];
        const TABLE = document.getElementById("books")
    }
}