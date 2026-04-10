import './ToolBar.css';

import { useState } from 'react';
import addTask from '../../utils/addTask';

import InputBar from '../../components/InputBar/InputBar';
import AddButton from '../../components/AddButton/AddButon';

const ToolBar = ({ tasks, setTasks }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        addTask(tasks, setTasks, inputValue, setInputValue);
    };

    return (
        <div className='toolbar-container'>
            <InputBar inputValue={inputValue} setInputValue={setInputValue} />
            <AddButton handleSubmit={handleSubmit} />
        </div>
    );
};

export default ToolBar;