import './styles.css';
// import Searchbar from '../Search_bar/index.jsx';
// import Button from '../Button/index.jsx';

function Column() {
    return (
        <div className="column_container">
            <div className="column_header">
                <div className="column_header_left">
                    <p className="column_header_title">Title</p>
                    <div className="total_cards">0</div>
                </div>
                
                <div className="column_header_right">
                    <button className="add_card_button">+</button>
                    <button className="column_settings_button">⋯</button>
                </div>
            </div>

            <div className="cards_container">
                
            </div>
        </div>
    )
}

export default Column;