import PropTypes from 'prop-types';
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import { search } from '../utils/BooksAPI';
import Books from "./Books";

const Search = (props) => {
    const [query, setQuery] = useState("");
    const { onUpdateShelfType } = props;
    const [searchedBooks, setSearchedBooks] = useState([]);

    const updateQuery = async (query) => {
        setQuery(query.trim());
        if (query) {
            const res = await search(query.trim(), 10);
            res.length > 0 ? setSearchedBooks(res) : setSearchedBooks([])
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
                <span>
                    Now showing {searchedBooks.length}
                </span>
                <Books
                    booksData={searchedBooks}
                    onUpdateShelfType={onUpdateShelfType}
                />
            </div>
        </div>
    );
}

Search.propTypes = {
    onUpdateShelfType: PropTypes.func.isRequired
};

export default Search;