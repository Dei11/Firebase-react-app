import React, { useEffect, useState } from "react";
import BookDataService from "./services/book.service";

function BookList({ getBookId }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, [books]);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    //console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    console.log("Book deleted" + id);
    //    getBooks();
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}

      <table>
        <tr>
          <th>Index</th>
          <th>Title</th>
          <th>Author</th>
          <th>Status</th>
        </tr>
        {books.map((doc, index) => {
          return (
            <>
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.title}</td>
                <td>{doc.author}</td>
                <td>{doc.status}</td>
              </tr>

              <button onClick={(e) => getBookId(doc.id)}>Edit</button>
              <button onClick={(e) => deleteHandler(doc.id)}>Delete</button>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default BookList;
