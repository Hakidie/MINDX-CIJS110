import './styles.css'
import { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleInput = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // onSubmit(formData);
        console.log(formData);
    };

    return (
        <form>
            <div className='input-container'>
                <span>Name: </span>
                <input type='text' placeholder='Name' onChange={handleInput}></input>
            </div>

            <div className='input-container'>
                <span>Email: </span>
                <input type='text' placeholder='Email' onChange={handleInput}></input>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form