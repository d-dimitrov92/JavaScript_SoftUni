function oldBooks(input) {
    let searchedBook = input.shift();
    let bookCap = Number(input.shift());
    let counter = 0;
    let book = input.shift();

    while(book != searchedBook) {
        if(counter == bookCap){
            console.log("The book you search is not here!");
            console.log(`You checked ${counter} books.`);
            return;
        }
        book = input.shift();
        counter++;
    }
    console.log(`You checked ${counter} books and found it.`)
}


oldBooks([
    'The Spot',
    '4',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify'
  ])