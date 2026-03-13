import './Card.css';

function Card({ card, selectCard }) {
    const selectMovie = () => {
        selectCard(card);
    };

    return (
        <div className='card-container' onClick={selectMovie}>
            <img src={card.image} alt="Anime cover" />

            <div className="card-episode">
                <p>Episode <span>{card.episode}</span></p>
            </div>

            <h3>{card.movieName}</h3>
        </div>
    )
}

export default Card;