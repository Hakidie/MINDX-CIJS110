import './styles.css';
import Card from '../Card/index.jsx';
// import Button from '../Button/index.jsx';

function Column({ columnTitle, cardsData, openModal, columnKey, onEditCard }) {
    return (
        <div className="column_container">
            <div className="column_header">
                <div className="column_header_left">
                    <p className="column_header_title">{columnTitle}</p>
                    <div className="total_cards">{cardsData.length}</div>
                </div>
                
                <div className="column_header_right">
                    {/* <button className="add_card_button" onClick={toggleModal}>+</button> */}
                    <button className="add_card_button" onClick={openModal}>+</button>
                    <button className="column_settings_button">⋯</button>
                </div>
            </div>

            <div className="cards_container">
                {cardsData.map((item) => (
                    <Card 
                        key={item.id}
                        title={item.title}
                        content={item.content}
                        assigned={item.assigned}
                        status={item.status}
                        flag={item.flag}
                        deadline={item.deadline}
                        openModal={() => {
                            onEditCard(item, columnKey);
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Column;