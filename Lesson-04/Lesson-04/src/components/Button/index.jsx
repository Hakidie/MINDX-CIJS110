import './styles.css';

function Button({ toggleModal }) {
    return (
        <button className="button" onClick={toggleModal} >
            New item
        </button>
    )
}

export default Button;