
// TO DO
// change the big function to be 2 functions -->
// 1st. add book to library
// this func brings up the form and when submitted, creates a book Object

// 2nd. display books
// loop through books in library array and display each



const addBookButton = document.querySelector('.add-book');
const addBookForm = document.getElementById('add-book-form');
let bookLibrary = new Array();

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (this.title + ' by ' + this.author +', ' + this.pages + ' pages' + this.read)
    }
}

addBookButton.addEventListener('click', function() {
    addBookForm.style.display='block';
})

addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').checked;

    let newBook = new Book(title, author, pages, read);
    
    bookLibrary.push(newBook);


    displayBooks()
})
function displayBooks() {
    clearDisplay();
    for (let [index,book] of bookLibrary.entries()) {

        var card = document.createElement('div');
        card.classList.add('book-card');
        card.dataset.index = index;

        var titleElement = document.createElement('h3');
        titleElement.textContent = book.title;
        card.appendChild(titleElement);

        var authorElement = document.createElement('p');
        authorElement.textContent = book.author;
        authorElement.classList.add('author');
        card.appendChild(authorElement);

        var pagesElement = document.createElement('p');
        pagesElement.textContent = 'Pages: ' + book.pages;
        pagesElement.classList.add('pages');
        card.appendChild(pagesElement);

        var readElement = document.createElement('p');
        readElement.textContent = book.read;
        card.appendChild(readElement);

        var removeBookButton = document.createElement('button');
        removeBookButton.classList.add('remove-book');
        removeBookButton.textContent = 'Remove Book';
        removeBookButton.addEventListener('click', removeBook)
        card.appendChild(removeBookButton);

        var removeBookButton = document.createElement('button');
        removeBookButton.classList.add('remove-book');
        removeBookButton.textContent = 'Remove Book';
        removeBookButton.addEventListener('click', removeBook)
        card.appendChild(removeBookButton);

        document.getElementById('library-grid-container').appendChild(card);

        addBookForm.reset();
        addBookForm.style.display='none';

    }
}

function clearDisplay() {
    let libraryGrid = document.getElementById('library-grid-container')
    libraryGrid.replaceChildren();
}

function removeBook(event) {
    let button = event.target;
    let card = button.closest('.book-card')
    
    if (card) {
        const index = card.dataset.index;
        bookLibrary.splice(index, 1);
        displayBooks();
    }

}