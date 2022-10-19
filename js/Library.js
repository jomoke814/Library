let myLibrary = [
    {   
        Title: 'Learn Enough Command line',
        Author: 'Micheal Hurt',
        Pages: 205
    },
    {
        Title: 'The Art of Micro Frontend',
        Author: 'Florian Rappl',
        Pages: 300
    },
    {
        Title: 'Think like a Programmer',
        Author: 'Anton Spraul',
        Pages: 350
    }
];

//Constructor
function Book (title, author, pages, read) {
    this.title =  title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (title + author + ", " + pages + ", " + read);
    }
}

function addBookToLibrary () {

}