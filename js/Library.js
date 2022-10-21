const addBookButton = document.querySelector('.add-book-btn')
const submitButton = document.querySelector('.submit-btn')
const clearButton = document.querySelector('.reset-btn')

let myLibrary = [];

//Constructor
function Book (Title, Author, Pages, Read) {
    this.Title =  Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function () {
    //     return (title + author + ", " + pages + ", " + read);
    // }
}

// Adding a book function
function addBookToLibrary (Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read)
        myLibrary.push(book);
        displayBooks();
}

// function to display books
function displayBooks() {
    const books = document.querySelector(".books-container");
    const removeDivs = document.querySelectorAll('.card');

    for(let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }

    myLibrary.forEach(myLibrary => {
        const card = document.createElement('div');
        card.classList.add('card');
        books.appendChild(card);
        for(let key in myLibrary) {
            const para = document.createElement('p');
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })
}

addBookButton.addEventListener("click", () => {
    document.getElementById("add-book-form").style.display = "block";
})

submitButton.addEventListener("click", () => {
    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Pages = document.getElementById('Pages').value;
    let Read = document.getElementById('Read').value;

    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    addBookToLibrary(Title, Author, Pages, Read);

    document.getElementById('book-form').reset();
})

clearButton.addEventListener("click", () => {
    document.getElementById('book-form').reset();
}) 



// call function and adding books manually
// addBookToLibrary('Learn Enough Command line', 'Micheal Hurt', '205 Pages', 'Read');
// addBookToLibrary('The Art of Micro Frontend', 'Florian Rappl', '300 Pages', 'Not Yet Read');
// addBookToLibrary('Learn Enough Text Editor To be Dangerous', 'Micheal Hurt', '250 Pages', 'Read');
// addBookToLibrary('Learn Enough GIT to be Dangerous', 'Micheal Hurt', '230 Pages', 'Read')

// console.log('End of Library List');
// displayBooks();