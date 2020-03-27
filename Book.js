export class Book {
    constructor (title, author, description, pages, currentPage) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages; //total pages of books
        this.currentPage = currentPage; // between 1 and Npages
        this.read = false;
    }

    readBook(page) {
        if (page < this.pages) {
            this.read = 0;
        }  if (page >= 1 && page < this.pages) {
            this.currentPage += page;
        }  if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
        }
    }
}

let firstBook = new Book('L\'étranger', 'Albert Camus', 'Ohlala', 150, 10);
let secondBook = new Book('Le livre de jungle', 'Rudyard Kipling', 'Jungle book', 200, 178);
let thirdBook = new Book('Ivanhoé', 'Walter Scott', 'roman adventure', 350, 125);

export const books = [firstBook, secondBook, thirdBook];