import './AddButton.css';

const AddButton = ({ handleSubmit }) => {
    return (
        <div className='add-button-container'>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default AddButton;