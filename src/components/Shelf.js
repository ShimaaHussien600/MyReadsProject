import PropTypes from 'prop-types';
import "../App.css";
import Books from "./Books";

const Shelf = (props) => {
    const { shelfName, booksData, shelfPropertyName, onUpdateShelfType } = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
                <Books
                    shelfName={shelfName}
                    shelfPropertyName={shelfPropertyName}
                    booksData={booksData}
                    onUpdateShelfType={onUpdateShelfType}
                />
            </div>
        </div>
    );
}

Shelf.propTypes = {
    booksData: PropTypes.array.isRequired,
    shelfName: PropTypes.string.isRequired,
    shelfPropertyName: PropTypes.string.isRequired,
    onUpdateShelfType: PropTypes.func.isRequired
};

export default Shelf;