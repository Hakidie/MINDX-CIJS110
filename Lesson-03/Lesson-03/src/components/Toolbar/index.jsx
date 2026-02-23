import './styles.css';
import Searchbar from '../Search_bar/index.jsx';
import Button from '../Button/index.jsx';

function Toolbar() {
    return (
        <div className="toolbar_container">
            <Searchbar />
            <Button />
        </div>
    )
}

export default Toolbar;