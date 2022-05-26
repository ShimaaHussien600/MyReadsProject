import PropTypes from 'prop-types';
import "../App.css";
import DropDownItem from "./DropDownItem";

const BookItem = (props) => {
    const { book, onUpdateShelfType } = props;

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url(${book.imageLinks.thumbnail})`,
                        }}>
                    </div>
                    <DropDownItem
                        book={book}
                        onUpdateShelfType={onUpdateShelfType} />
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors &&
                    book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
            </div>
        </li>
    );
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelfType: PropTypes.func.isRequired
};

export default BookItem;