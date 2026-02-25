import './styles.css';
import searchIcon from '../../assets/search-icon.svg';

function Searchbar() {
    return (
        <div className="searchbar_container">
            <img className="search_icon" src={searchIcon} alt="search icon" />
            <input className="search_input" type="text" placeholder='Search Items'></input>
        </div>
    )
}

export default Searchbar;