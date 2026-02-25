import './styles.css';
import searchIcon from '../../assets/search-icon.svg';

function Searchbar({ onSearch }) {
    return (
        <div className="searchbar_container">
            <img className="search_icon" src={searchIcon} alt="search icon" />
            <input className="search_input" type="text" placeholder='Search Items' onChange={(e) => onSearch(e.target.value)}></input>
        </div>
    )
}

export default Searchbar;