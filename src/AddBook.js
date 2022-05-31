import React, { useState } from "react";
import BookDataService from "./services/book.service";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Availabel");
  const [message, setMessage] = useState({ error: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || author === "") {
      setMessage({ error: true, message: "Please fill in all fields" });
      return;
    }
    const newBook = { title, author, status };
    console.log(newBook);
    try {
      await BookDataService.addBook(newBook);
      setMessage({ error: false, message: "Book added successfully" });
    } catch (err) {
      setMessage({ error: true, message: err.message });
    }
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="text" placeholder="Year" />
        <button onClick={handleSubmit}>Add Book</button>
        <br />
        <br />
        <br />
        <br />

        <label>{title}</label>

        <br />
        <label>{author}</label>
      </form>
    </div>
  );
}

export default AddBook;
