import { db } from "../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");
class BookDataService {
  addBook = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (bookId, updatedBook) => {
    return updateDoc(bookCollectionRef, bookId, updatedBook);
  };

  deleteBook = async (bookId) => {
    return await deleteDoc(bookCollectionRef, bookId);
  };

  getAllBooks = () => {
    return getDocs(bookCollectionRef);
  };

  getBook = (bookId) => {
    return getDoc(bookCollectionRef, bookId);
  };
}

export default new BookDataService();
