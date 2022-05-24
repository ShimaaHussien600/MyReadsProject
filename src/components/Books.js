import PropTypes from 'prop-types';
import "../App.css";
import BookItem from "./BookItem";

const Books = (props) => {
    const { shelfName, booksData, shelfPropertyName, onUpdateShelfType } = props;
    const shelfBooks = booksData.filter(item => item.shelf === shelfPropertyName)

    return (
        <ol className="books-grid">
            {shelfBooks.map(book => {
                return (
                    <BookItem
                        key={book.id}
                        shelfName={shelfName}
                        shelfPropertyName={shelfPropertyName}
                        book={book}
                        onUpdateShelfType={onUpdateShelfType}
                    />
                )
            })}
        </ol>
    );
}

Books.propTypes = {
    booksData: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfPropertyName: PropTypes.string.isRequired,
    onUpdateShelfType: PropTypes.func.isRequired
};

export default Books;