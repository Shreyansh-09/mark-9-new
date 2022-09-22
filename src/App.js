import "./styles.css";
import { useState } from "react";

var bookList = {
  JavaScript: [
    {
      name: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      rating: "4/5",
      description:
        "This book is pure art for the beginner and intermediate JavaScript developers—concepts like control structure, function, and data structure is in this book."
    },
    {
      name: "You Don't Know JS",
      author: "Kyle Simpson",
      rating: "3.5/5",
      description:
        "You don’t know JS” is not a single book; it is a series of 6 books that are well written and well organized for learning JavaScript. This series of books helps you increase your JavaScript knowledge and cover a deep understanding of concepts."
    },
    {
      name: "A Smarter Way to Learn JavaScript",
      author: "Mark Myers",
      rating: "4/5",
      description:
        "Suppose you are new to the programming language and have no prior knowledge of the JavaScript language. In that case, this is the book for you. It is also for intermediate JavaScript developers who want to strengthen their understanding of the language."
    }
  ],
  Fiction: [
    {
      name: "Shiva Trilogy",
      author: "Amish Tripathi",
      rating: "5/5",
      description:
        "The Shiva Trilogy is the tale of the extraordinary man whose adventures 4000 years ago are remembered today as the myths of the Mahadev, the God of Gods. It is chronicled through three books, The Immortals of Meluha, The Secret of the Nagas & The Oath of the Vayuputras."
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      author: "J. K. Rowling",
      rating: "4.5/5",
      description:
        "Harry Potter and the Philosopher's Stone is a 1997 fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    },
    {
      name: "The Night Train At Deoli",
      author: "Ruskin Bond",
      rating: "3.5/5",
      description:
        "In this short story, Ruskin Bond narrates his experience during one of his train journeys to Dehradun as an eighteen-year-old. It revolves around a small lonely station called Deoli."
    }
  ],
  Business: [
    {
      name: "Never Split the Difference",
      author: "Christopher Voss and Tahl Raz",
      rating: "3.5/5",
      description:
        "After a stint policing the rough streets of Kansas City, Missouri, Chris Voss joined the FBI, where his career as a kidnapping negotiator brought him face-to-face with bank robbers, gang leaders and terrorists. Never Split the Difference takes you inside his world of high-stakes negotiations, revealing the nine key principles that helped Voss and his colleagues succeed when it mattered the most – when people’s lives were at stake."
    },
    {
      name: "Loonshots",
      author: "Safi Bahcall",
      rating: "5/5",
      description:
        "What do James Bond and Lipitor have in common? What can we learn about human nature and world history from a glass of water? In Loonshots, physicist and entrepreneur Safi Bahcall reveals a surprising new way of thinking about the mysteries of group behavior that challenges everything we thought we knew about nurturing radical breakthroughs."
    },
    {
      name:
        "Good to Great: Why Some Companies Make the Leap... and Others Don't",
      author: "Jim Collins",
      rating: "5/5",
      description:
        "Good to Great is a management book by Jim C. Collins that describes how companies transition from being good companies to great companies, and how most companies fail to make the transition."
    }
  ]
};

var booksName = Object.keys(bookList);
export default function App() {
  var [genre, setgenre] = useState("JavaScript");
  function genreclickHandler(bookname) {
    setgenre(bookname);
  }
  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <small>Checkout my favorite books. Select a genre to get started.</small>
      <div>
        {booksName.map(function (book) {
          return (
            <button key={book} onClick={() => genreclickHandler(book)}>
              {book}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        {bookList[genre].map(function (nameofBook) {
          return (
            <ul style={{ paddingInlineStart: "0px" }}>
              <li key={nameofBook.name} style={{ listStyle: "none" }}>
                <div>{nameofBook.name}</div>
                <div>{nameofBook.author}</div>
                <div>{nameofBook.rating}</div>
                <div>{nameofBook.description}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
