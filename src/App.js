import "./App.css";
import { useState, useEffect } from "react";
import Shelf from "./components/Shelf";
import { getAll, update } from "./utils/BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
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
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
