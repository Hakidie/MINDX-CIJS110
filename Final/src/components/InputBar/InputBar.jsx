import './InputBar.css';

const InputBar = ({ inputValue, setInputValue }) => {
    return (
        <div className='input-bar-container'>
            <input type='text' placeholder='add details' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    );
};

export default InputBar;