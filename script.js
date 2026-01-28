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
        const TABLE = document.getElementById("books");
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
            <button onclick="toggleRead(${BOOK.id})" class="btn btn-dark">Change</button>
        </td>
        <td>
            <button onclick="removeBook(${BOOK.id})" class="btn btn-danger">Remove</button>
        </td>
        </tr>`; 
    }
}

function toggleRead(book_id) {

}

function removeBook(book_id) {

}

addBookToLibrary("Linux", "amr loksha", 1000, false);
loadBooks();