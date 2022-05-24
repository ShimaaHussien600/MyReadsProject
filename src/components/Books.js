import PropTypes from 'prop-types';
import "../App.css";
import BookItem from "./BookItem";

const Books = (props) => {
    const { shelfName, booksData, shelfPropertyName } = props;
    const shelfBooks = booksData.filter(item => item.shelf === shelfPropertyName)

    return (
        <ol className="books-grid">
            {shelfBooks.map(book => {
                console.log("ddddddddddddddd", book)
                return (
                    <BookItem
                        shelfName={shelfName}
                        shelfPropertyName={shelfPropertyName}
                        book={book}
                    />
                )
            })}
        </ol>
    );
}

Books.propTypes = {
    booksData: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfPropertyName: PropTypes.string.isRequired
};

export default Books;