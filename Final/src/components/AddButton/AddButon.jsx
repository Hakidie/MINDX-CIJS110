import './AddButton.css';

const AddButton = ({ addTab, tasks, setTasks, inputValue, setInputValue }) => {
    return (
        <div className='add-button-container'>
            <button onClick={() => addTab(tasks, setTasks, inputValue, setInputValue)}>Add</button>
        </div>
    );
};

export default AddButton;