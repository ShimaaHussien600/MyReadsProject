import PropTypes from 'prop-types';
import "../App.css";
import DropDownItem from "./DropDownItem";

const BookItem = (props) => {
    const { book, onUpdateShelfType } = props;
    const bookImg = (book?.imageLinks?.thumbnail) ? book.imageLinks?.thumbnail :
        "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"

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
                                `url(${bookImg})`,
                        }}>
                    </div>
                    <DropDownItem
                        book={book}
                        onUpdateShelfType={onUpdateShelfType} />
                </div>
                <div className="book-title">{(book?.title )? book.title : "No Tiltle"}</div>
                {book.authors &&
                    <div className="book-authors" >
                        {(book.authors).join(' - ')}
                    </div>
                }
            </div>
        </li>
    );
}

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelfType: PropTypes.func.isRequired
};

export default BookItem;