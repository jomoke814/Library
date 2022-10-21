let myLibrary = [
    // {   
    //     Title: 'Learn Enough Command line',
    //     Author: 'Micheal Hurt',
    //     Pages: 205
    // },
    // {
    //     Title: 'The Art of Micro Frontend',
    //     Author: 'Florian Rappl',
    //     Pages: 300
    // },
    // {
    //     Title: 'Think like a Programmer',
    //     Author: 'Anton Spraul',
    //     Pages: 350
    // }
];

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
}

// function to display books
function displayBooks() {
    const books = document.querySelector(".books-container");
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

const addBookButton = document.querySelector('.add-book-btn')

addBookButton.addEventListener("click", () => {
    document.getElementById("add-book-form").style.display = "block";
})



// call function and adding books manually
addBookToLibrary('Learn Enough Command line', 'Micheal Hurt', '205 Pages', 'Read');
addBookToLibrary('The Art of Micro Frontend', 'Florian Rappl', '300 Pages', 'Not Yet Read');
addBookToLibrary('Learn Enough Text Editor To be Dangerous', 'Micheal Hurt', '250 Pages', 'Read');
addBookToLibrary('Learn Enough GIT to be Dangerous', 'Micheal Hurt', '230 Pages', 'Read')

console.log('End of Library List');
displayBooks();