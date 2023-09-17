const books = [
  {
    author: "Lucy Foley",
    name: "List of Invitees",
    price: 70,
  },
  {
    author: "Susanna Clarke",
    name: "Jonathan Strange & Mr Norrell",
  },
  {
    name: "Design. A Book for Non-Designers.",
    price: 70,
  },
  {
    author: "Alan Moore",
    name: "Neonomicon",
    price: 70,
  },
  {
    author: "Terry Pratchett",
    name: "Moving Pictures",
    price: 40,
  },
  {
    author: "Angus Hyland",
    name: "Cats in Art",
  },
];

const DisplayBooks = (books) => {
  const root = document.querySelector("#root");
  const list = document.createElement("ul");

  books.forEach((book) => {
    try {
      if (book.name && book.author && book.price) {
        const liEl = document.createElement("li");
        liEl.innerText = `name:${book.name} \n author:${book.author} \n price:${book.price}`;
        list.append(liEl);
      } else {
        throw new Error();
      }
    } catch (error) {
      if (!book.name) {
        console.error("book name is missing!",book);
      }
      if (!book.author) {
        console.error("book author is missing!",book);
      }
      if (!book.price) {
        console.error("book price is missing!",book);
      }
    }
  });
  root.append(list)
};


DisplayBooks(books);
