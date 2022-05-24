import PropTypes from 'prop-types';
import "../App.css";
import DropDownItem from "./DropDownItem";

const BookItem = (props) => {
    const { book } = props;

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
                        }}
                    ></div>
                    <DropDownItem
                        currentShelf={book.shelf} />
                </div>
                <div className="book-title">{book.title}</div>
                {/* assumed it has only one author and it located in first index */}
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        </li>
    );
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookItem;