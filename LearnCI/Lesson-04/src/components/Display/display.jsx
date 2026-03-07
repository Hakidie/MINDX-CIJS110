import './styles.css'
import { useState } from 'react'

function Display() {
    return (
        <div>
            <div className='display-container'>
                <span>Name: </span>
            </div>

            <div className='display-container'>
                <span>Email: </span>
            </div>
        </div>
    )
}

export default Display