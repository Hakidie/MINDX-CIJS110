import { useState } from 'react';
import './Home.css';

import LargeCard from '../LargeCard/LargeCard'
import Card from '../Card/Card'

function Home({ movieData }) {
    const [selectedMovie, setSelectedMovie] = useState(movieData[1]);

    return (
        <div className='home-container'>
            <div className='section-container'>
                <h2>Explore</h2>
                <p>What are you gonna watch today?</p>

                <LargeCard 
                    selectedCard={selectedMovie}
                />
            </div>

            <div className='section-container'>
                <h2>New Realease</h2>

                <div className='list-container'> 
                    {movieData.slice(1).map((card) => (
                        <Card 
                            key={card.id} 
                            card={card} 
                            selectCard={setSelectedMovie}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;