import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout/PageLayout";
import { useSelector } from "react-redux/es/exports";
import Book from "../components/Book/Book";

const FinishedBooks = () => {
  const finishedList = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>
      {finishedList.length === 0 && (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
      {finishedList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </PageLayout>
  );
};

export default FinishedBooks;
