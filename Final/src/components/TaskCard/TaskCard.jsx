import './TaskCard.css';

import { useState } from 'react';
import removeTask from '../../utils/removeTask';
import updateTask from '../../utils/updateTask';

import trashIcon from '../../assets/delete.png';

const TaskCard = ({ task, tasks, setTasks, activeTab }) => {
    const [status, setStatus] = useState(task.active);

    const handleStatus = () => {
        setStatus(!status);
        console.log(task);
        updateTask(task, tasks, setTasks);
    };

    const handleRemove = () => {
        removeTask(task, tasks, setTasks);
        console.log(task);
    };

    return (
        <div className='task-card-container'>
            <input type='checkbox' checked={!status} onChange={handleStatus}/>
            <p className={`task-status ${status === false ? "finish" : ""}`}>{task.text}</p>
            {activeTab === 'completed' &&
                <button onClick={handleRemove}><img src={trashIcon} alt='delele icon'/></button>
            }
        </div>
    );
};

export default TaskCard;