import PropTypes from 'prop-types';
import "../App.css";

const DropDownItem = (props) => {
    const { currentShelf } = props;

    return (
        <div className="book-shelf-changer">
            <select defaultValue={currentShelf}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading" selected={true}>
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

DropDownItem.propTypes = {
    currentShelf: PropTypes.string.isRequired
};

export default DropDownItem;