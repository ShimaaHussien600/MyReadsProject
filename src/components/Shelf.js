import PropTypes from 'prop-types';
import "../App.css";
import Books from "./Books";

const Shelf = (props) => {
    const { shelfName, booksData, shelfPropertyName } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <Books
                    shelfName={shelfName}
                    shelfPropertyName={shelfPropertyName}
                    booksData={booksData}
                />
            </div>
        </div>
    );
}

Shelf.propTypes = {
    booksData: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfPropertyName: PropTypes.string.isRequired
};

export default Shelf;