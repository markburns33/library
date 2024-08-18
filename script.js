
// TO DO
// change the big function to be 2 functions -->
// 1st. add book to library
// this func brings up the form and when submitted, creates a book Object

// 2nd. display books
// loop through books in library array and display each



const addBookButton = document.querySelector('.add-book')
const addBookForm = document.getElementById('add-book-form')


addBookButton.addEventListener('click', function() {
    addBookForm.style.display='block';
})

addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    var read = document.getElementById('read').value;

    var card = document.createElement('div');
    card.classList.add('book-card');

    var titleElement = document.createElement('h3');
    titleElement.textContent = title;
    card.appendChild(titleElement);

    var authorElement = document.createElement('p');
    authorElement.textContent = author;
    authorElement.classList.add('author');
    card.appendChild(authorElement);

    var pagesElement = document.createElement('p');
    pagesElement.textContent = 'Pages: ' + pages;
    pagesElement.classList.add('pages');
    card.appendChild(pagesElement);

    var readElement = document.createElement('p');
    readElement.textContent = read;
    card.appendChild(readElement);

    console.log(title);
    console.log(author);
    console.log(pages);
    console.log(read);

    document.getElementById('library-grid-container').appendChild(card);

    addBookForm.reset();
    addBookForm.style.display='none';

})
function addBook() {

}