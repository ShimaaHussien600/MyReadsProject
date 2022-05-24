import "./App.css";
import { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import { getAll } from "./utils/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const getBooksData = async () => {
      const res = await getAll();
      setBooksData(res)
    };

    getBooksData();

  }, [])

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
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
              />

              <Shelf
                shelfName="Want to Read"
                shelfPropertyName="wantToRead"
                booksData={booksData}
              />
              <Shelf
                shelfName="Read"
                shelfPropertyName="read"
                booksData={booksData}
              />

            </div>}
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
