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

Book.prototype.toggleRead = function () {
    this.read = !this.read;
    loadBooks();
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  loadBooks();
}

function loadBooks() {
    const TABLE = document.getElementById("books");
    TABLE.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const BOOK = myLibrary[i];
        TABLE.innerHTML += `<tr>
        <th scope="row">
            ${i + 1}
        </th>
        <td>
            ${BOOK.title}
        </td>
        <td>
            ${BOOK.author}
        </td>
        <td>
            ${BOOK.pages}
        </td>
        <td>
            ${BOOK.read ? "Yes" : "No"}
        </td>
        <td>
            <button onclick="const BOOK = getBookById('${BOOK.id}'); BOOK.toggleRead();" class="btn btn-dark">Change</button>
        </td>
        <td>
            <button onclick="removeBook('${BOOK.id}')" class="btn btn-danger">Remove</button>
        </td>
        </tr>`; 
    }
}

function getBookById(book_id) {
    for (let i = 0; i < myLibrary.length; i++) {
        const BOOK = myLibrary[i];
        if (BOOK.id === book_id) {
            return BOOK;
        }
    }
}

function removeBook(book_id) {
    const BOOK = getBookById(book_id)
    myLibrary.splice(myLibrary.indexOf(BOOK), 1);
    loadBooks();
}

const FormSubmit = document.getElementById("submit");
FormSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary(document.getElementById("inputBookTitle").value, document.getElementById("inputBookAuthor").value, Number(document.getElementById("inputBookPages").value), Boolean(document.getElementById("inputBookRead").value));
})

document.addEventListener("DOMContentLoaded", (e) => {
    loadBooks();
})