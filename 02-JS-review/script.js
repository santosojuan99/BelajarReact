const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
const book = getBook(2); //ambil json data yang memiliki id 2

book;

// const title = book.title; // ambil value book.title
// const author = book.author;
// title;
// author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book; //ini itu nama variable yang mencapture dan property didalam json yang diambil harus sama namanya
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; //kalau cara inisialisasi const seperti ini, berarti ambil urutan array dalam variable
//tulisan ...nama_variable harus dipaling terakhir untuk mendapatkan sisa data yang belum diambil dalam array (hanya berlaku ketika capture valeu di paling akhir)

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"]; //dimulai dari nilai array yang ada di genres, lalu ditambah dengan "epic fantasy"

newGenres;

const updatedBook = {
  //dengan menambah ... itu kita memasukkan property dari book ke dalam updatedBook, kalau tanpa ... maka kita memasukkan book kedalam updatedBook
  ...book,
  // Adding a new property
  moviePublicationDate: "2021-12-19",

  //Overwriting an existing property ketika ditaruk setelah property yang sudah ada
  pages: 1210,
};
updatedBook;

//IF DAN JAVASCRIPT FUNCTION DIDALAM TEXT
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : " not "} been adapted as a movie`; //kita bisa pakai javascript function dalam mencampurkan tulisan. Untuk mencampurkan text dengan variable itu pakai tanda ``
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000"; //pakai ? untuk yes nya dan : untuk elsenya. ini if didalam const. Contoh penggabungan ke kalimat yang lebih luas ada di atas
pages;
pagesRange;

//CREATE YOUR OWN FUNCTION UNTUK DIDALAM TEXT

// function getYear(str) {
//   return str.split("-")[0];
// }

// const getYear = (str) => {
//   return str.split("-")[0]
// };//ini buat kalau mengisi lebih dari 1 logika didalamnya, pakai {} lagi dan harus ada return

const getYear = (str) => str.split("-")[0]; //variablenya jadi nama function, yang didalam kurung jadi variablenya

console.log(getYear(publicationDate));

const summary1 = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}`;
summary1;

//SHORT CIRCUIT AND LOGICAL OPERATOR
//kalau or ada yang salah dan benar, hasilnya salah
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined untuk && dan ||
// falsy: null, undefined untuk ??
console.log("jonas" && "some string");
console.log(0 && "Some string");

//kalau or ada yang salah dan benar, hasilnya benar
console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

//beda falsy sehingga dia ambil yang pertama, kalau falsy maka diambil yang kedua
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;
const terjemahan = book.translations.spanish ?? "no data";
terjemahan;

//optional chaining untuk menghalau error, lalu menjadikannya ke NaN
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.aa ?? 0; //tanda ? itu yang digunakan untuk menghalau undefined yang menyebabkan error atau object yang kita tidak tahu ada atau nggak nya sehingga bisa di stop sebelum sampai kejauhan dibacanya
  librarything;
  return goodreads + librarything;
}
t = book.reviews.librarything;
t;
console.log(getTotalReviewCount(book));

//ARRAY MAPPING METHOD
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((map) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
})); //cara return beberapa dictionary atau beberapa value
essentialData;

const longBooksWithMovie = books
  .filter((book) => book.pages > 500) //filter pertama
  .filter((book) => book.hasMovieAdaptation); //filter kedua, mirip pakai AND
longBooksWithMovie;
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure")) //di filter dulu
  .map((book) => book.title); //lalu di mapping untuk diambil judulnya
adventureBooks;

//ARRAY REDUCE METHOD
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0); //reduce itu untuk menggabungkan menjadi 1 value. sum itu adalah variable yang terus bertambah dari book.pages. 0 itu value awalnya.
pagesAllBooks;

//ARRAY SORT
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b); //sort secara ascending, ini rumus. Slice disitu gunanya untuk mencopy nilai arr secara sementara, kalau ga ada maka nilai arr akan ketimpa dengan pemrosesannya
sorted;
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages); //sort secara descending, ini rumus
sortedByPages;

//Imutable Array Add, Delete, Update
//Tambah Buku
const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "J. K. Rowling",
};
const bookAfterAdd = [...books, newBook]; //tambah dictionary
bookAfterAdd;

//Delete Buku
const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3); //menghapus yang id nya 3
bookAfterDelete;

//Update Buku
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
); //update pages book menjadi 1210 kalau id bukunya 1
bookAfterUpdate;

//CARA BACA API
// fetch("https://jsonplaceholder.typicode.com/todos") //dalam posisi ini, task yang ada dibawah dapat menyalip pemrosesan ini
//   .then((res) => res.json()) //ketika data sudah di fetch dari link, maka dirubah ke json
//   .then((data) => console.log(data)); //data yang sudah dalam berupa json, kita tampilkan di console
// console.log("jonas");
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  // console.log(data); //kalau dibawah tidak diberi await, maka ini akan terlewati

  return data;
}

const todos = await getTodos(); //kalau sudah diberi await, maka akan bergerak secara syncronous.
console.log(todos);

console.log("jonas");
