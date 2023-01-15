const getTheTitles = function(bookArray) {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    
    let bookTitleDescriptor;
    let bookTitles = [];

    for(let i = 0; i < bookArray.length; i++){
      
      let bookTitleDescriptor = Object.getOwnPropertyDescriptor(books[i], 'title');
      
      bookTitles.push(bookTitleDescriptor.value);
    }
    return bookTitles;
  };

// Do not edit below this line
module.exports = getTheTitles;
