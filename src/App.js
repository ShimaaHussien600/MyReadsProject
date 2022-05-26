import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import { Link } from 'react-router-dom';
import Shelf from "./components/Shelf";
import { getAll, update } from "./utils/BooksAPI";
import Search from "./components/Search";

function App() {
  const [booksData, setBooksData] = useState([]);

  const getBooksData = async () => {
    const res = await getAll();
    setBooksData(res)
  };

  useEffect(() => {

    getBooksData();

  }, [])

  const updateBooksData = async (updatedBook, shelf) => {
    // update the selected book shelf with new value 
    updatedBook.shelf = shelf;
    await update(updatedBook, shelf);
    setBooksData(
      // remove the changed book
      booksData.filter(book => book.id !== updatedBook.id)
        .concat(updatedBook) // then add it again with the new shelf value
    )
  };

  const updateShelfType = (updatedBook, shelf) => {
    updateBooksData(updatedBook, shelf);
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <Search
              onUpdateShelfType={updateShelfType} />
          }
        />
        <Route
          exact
          path="/"
          element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {booksData && <div>
                  <Shelf
                    shelfName="Currently Reading"
                    shelfPropertyName="currentlyReading"
                    booksData={booksData}
                    onUpdateShelfType={updateShelfType}
                  />

                  <Shelf
                    shelfName="Want to Read"
                    shelfPropertyName="wantToRead"
                    booksData={booksData}
                    onUpdateShelfType={updateShelfType}
                  />
                  <Shelf
                    shelfName="Read"
                    shelfPropertyName="read"
                    booksData={booksData}
                    onUpdateShelfType={updateShelfType}
                  />
                </div>}
              </div>
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
