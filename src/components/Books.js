import PropTypes from 'prop-types';
import "../App.css";
import BookItem from "./BookItem";

const Books = (props) => {
    const { booksData, shelfPropertyName, onUpdateShelfType } = props;
    const shelfBooks = shelfPropertyName ? booksData.filter(item => item.shelf === shelfPropertyName)
    : booksData;
    
    return (
        <ol className="books-grid">
            {shelfBooks.map(book => {
                return (
                    <BookItem
                        key={book.id}
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
    onUpdateShelfType: PropTypes.func.isRequired
};

export default Books;