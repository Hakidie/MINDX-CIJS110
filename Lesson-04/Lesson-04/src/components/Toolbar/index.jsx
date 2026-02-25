import './styles.css';
import Searchbar from '../Search_bar/index.jsx';
import Button from '../Button/index.jsx';

function Toolbar({ onSearch, toggleModal }) {
    return (
        <div className="toolbar_container">
            <Searchbar onSearch={onSearch}/>
            <Button toggleModal={toggleModal} />
        </div>
    )
}

export default Toolbar;