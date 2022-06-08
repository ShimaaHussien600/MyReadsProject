import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import useDebounce from '../customHooks/useDebounce';
import { search } from '../utils/BooksAPI';
import Books from "./Books";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const [noResult, setNoResult] = useState(false);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const { booksData, onUpdateShelfType } = props;

    const debouncedValue = useDebounce(query, 500);

    useEffect(() => {
        const fetchBooks = async query => {
            if (query) {
                const res = await search(query.trim(), 10);
                if (res?.length > 0) {
                    res.map((item, index) => {
                        const data = booksData.find(book => book.id === item.id)
                        if (data) {
                            // to add .shelf property to the book
                            res[index] = data
                        }
                    })
                    setSearchedBooks(res);
                    setNoResult(false);
                }
                else {
                    setSearchedBooks([]);
                    setNoResult(true);
                }
            }
        };

        fetchBooks(debouncedValue);

    }, [debouncedValue])

    const updateQuery = async (query) => {
        if (query) {
            setQuery(query);
        }
        else {
            setSearchedBooks([]);
            setQuery("");
            setNoResult(false);
        }
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                {searchedBooks.length > 0 &&
                    <span>
                        Now showing {searchedBooks.length} {searchedBooks.length > 1 ? "books" : "book"}
                    </span>
                }
                <Books
                    booksData={searchedBooks}
                    onUpdateShelfType={onUpdateShelfType}
                />
                {noResult && <img src="img/noResultFound.png" alt="noResultFoundIMG" />}
            </div>
        </div>
    );
}

Search.propTypes = {
    booksData: PropTypes.array.isRequired,
    onUpdateShelfType: PropTypes.func.isRequired
};

export default Search;