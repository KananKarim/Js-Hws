// ! TASK1

const clients1 = [
  "Gilbert",
  "Salvatore",
  "Pierce",
  "Summers",
  "Forbes",
  "Donovan",
  "Bennett",
];
const clients2 = ["Pierce", "Zaltzman", "Salvatore", "Michaelson"];

const allClients = [...new Set([...clients1, ...clients2])];
console.log(allClients);

// !TASK2

const characters = [
  {
    name: "Elena",
    lastName: "Gilbert",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Caroline",
    lastName: "Forbes",
    age: 17,
    gender: "woman",
    status: "human",
  },
  {
    name: "Alaric",
    lastName: "Saltzman",
    age: 31,
    gender: "man",
    status: "human",
  },
  {
    name: "Damon",
    lastName: "Salvatore",
    age: 156,
    gender: "man",
    status: "vampire",
  },
  {
    name: "Rebekah",
    lastName: "Mikaelson",
    age: 1089,
    gender: "woman",
    status: "vampire",
  },
  {
    name: "Klaus",
    lastName: "Mikaelson",
    age: 1093,
    gender: "man",
    status: "vampire",
  },
];

const charactersShortInfo = characters.map(({ name, lastName, age }) => {
  return {
    name,
    surname: lastName,
    age,
  };
});

console.log(charactersShortInfo);

//! TASK3

const user1 = {
  name: "John",
  years: 30,
};

const { name, years: age, isAdmin = false } = user1;

console.log(name, age, isAdmin);

//! TASK4

const satoshi2020 = {
  name: "Nick",
  surname: "Sabo",
  age: 51,
  country: "Japan",
  birth: "1979-08-21",
  location: {
    lat: 38.869422,
    lng: 139.876632,
  },
};

const satoshi2019 = {
  name: "Dorian",
  surname: "Nakamoto",
  age: 44,
  hidden: true,
  country: "USA",
  wallet: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
  browser: "Chrome",
};

const satoshi2018 = {
  name: "Satoshi",
  surname: "Nakamoto",
  technology: "Bitcoin",
  country: "Japan",
  browser: "Tor",
  birth: "1975-04-05",
};

const fullInfo = { ...satoshi2018, ...satoshi2019, ...satoshi2020 };

console.log(fullInfo);

//! TASK5

const books = [
  {
    name: "Harry Potter",
    author: "J.K. Rowling",
  },
  {
    name: "Lord of the rings",
    author: "J.R.R. Tolkien",
  },
  {
    name: "The witcher",
    author: "Andrzej Sapkowski",
  },
];

const bookToAdd = {
  name: "Game of thrones",
  author: "George R. R. Martin",
};

const allBooks = [...books, bookToAdd];
console.log(allBooks);

// ! TASK6
const employee = {
  name: "Vitalii",
  surname: "Klichko",
};

const employeeInfo = { ...employee, age: 20, salary:2500 };

console.log(employeeInfo);

// !TASK7 
const array = ['value', () => 'showValue'];

const [value,showValue] = array

alert(value); // should output 'value'
alert(showValue()); // should output 'showValue'
