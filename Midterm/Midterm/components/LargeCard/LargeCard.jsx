import './LargeCard.css';

function LargeCard({ selectedCard }) {
   
    return (
        <div className='large-card-container'>
            <img src={selectedCard.image} alt="Anime Title" />

            <div className="large-card-info">
                <h3>{selectedCard.movieName}</h3>
                <p>{selectedCard.description}</p>
            </div>
        </div>
        
    )
}

export default LargeCard;