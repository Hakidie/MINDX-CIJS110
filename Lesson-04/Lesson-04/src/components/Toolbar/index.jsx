import './styles.css';
import Searchbar from '../Search_bar/index.jsx';
import Button from '../Button/index.jsx';

function Toolbar({ onSearch }) {
    return (
        <div className="toolbar_container">
            <Searchbar onSearch={onSearch}/>
            <Button />
        </div>
    )
}

export default Toolbar;