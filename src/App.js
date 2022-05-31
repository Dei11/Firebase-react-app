import "./App.css";
import AddBook from "./AddBook";
import BookList from "./BookList";
import { useState } from "react";
import BookDataService from "./services/book.service";

function App() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    setBookId(id);
    console.log("Book Id: " + id);
  };

  return (
    <div className="App">
      <AddBook />
      <BookList getBookId={getBookIdHandler} />
    </div>
  );
}

export default App;
