const addBookButton = document.querySelector('.add-book-btn')
const submitButton = document.querySelector('.submit-btn')
const clearButton = document.querySelector('.reset-btn')

let myLibrary = [];

//Constructor
//changes back to constructor due to error read-only
function Book(Title, Author, Pages, Read) {
    this.Title =  Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
}
    


// Adding a book function
// const addBookToLibrary = (Title, Author, Pages, Read) {
//     let book = new Book(Title, Author, Pages, Read)
//         myLibrary.push(book);
//         displayBooks();
// }

// function to display books
class UI {
    static addBookToLibrary (Title, Author, Pages, Read) {
        let book = new Book(Title, Author, Pages, Read)
            myLibrary.push(book);
            UI.displayBooks();
    }

    static displayBooks() {
        const books = document.querySelector(".books-container");
        const removeDivs = document.querySelectorAll('.card');
    
        for(let i = 0; i < removeDivs.length; i++) {
            removeDivs[i].remove();
        }
    
        let index = 0
        myLibrary.forEach(myLibrarys => {
            const card = document.createElement('div');
            card.classList.add('card');
            books.appendChild(card);
    
            //looping through value to display card
            for(let key in myLibrarys) {
                const para = document.createElement('p');
                para.textContent = (`${key}: ${myLibrarys[key]}`);
                card.appendChild(para);
            }
    
            //create remove button
            const removeButton = document.createElement('button');
            removeButton.classList.add('delete-btn');
            removeButton.textContent = "Delete"
    
            //link remove button with array
            removeButton.dataset.linkedArray = index;
            card.appendChild(removeButton);
    
            //eventlistener for remove button to delete card and remove data from array
            removeButton.addEventListener("click", ()=> {
                let retrieveBook = removeButton.dataset.linkedArray;
                myLibrary.splice(parseInt(retrieveBook), 1);
                card.remove();
                UI.displayBooks();
            })
    
            //creating button to change read status
            const readButton = document.createElement('Button');
            readButton.classList.add('read-btn');
            readButton.textContent = 'Toggle status';
    
            //link read button with array data
            readButton.dataset.linkedArray = index;
            card.appendChild(readButton);
    
            //create eventListener to toggle read status button
            readButton.addEventListener('click', () => {
                let retrieveBookToggle = readButton.dataset.linkedArray;
                Book.prototype = Object.create(Book.prototype);
                const toggleBook = new Book();
    
                //checking read status
                if ((myLibrary[parseInt(retrieveBookToggle)].Read) == 'Yes') {
                    toggleBook.Read =  'No';
                    myLibrary[parseInt(retrieveBookToggle)].Read = toggleBook.Read; 
                } else if ((myLibrary[parseInt(retrieveBookToggle)].Read) == 'No') {
                    toggleBook.Read = 'Yes';
                    myLibrary[parseInt(retrieveBookToggle)].Read = toggleBook.Read;
                }
                UI.displayBooks();
            })
    
    
        index ++;
        })
    }
}

addBookButton.addEventListener("click", () => {
    document.getElementById("add-book-form").style.display = "block";
})

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let Title = document.getElementById('Title').value;
    let Author = document.getElementById('Author').value;
    let Pages = document.getElementById('Pages').value;
    let Read = document.getElementById('Read').value;

    if((Title == "") || (Author == "") || (Pages == "") || (Read == "")) {
        return;
    }

    UI.addBookToLibrary(Title, Author, Pages, Read);

    document.getElementById('book-form').reset();
})

clearButton.addEventListener("click", () => {
    document.getElementById('book-form').reset();
}) 
