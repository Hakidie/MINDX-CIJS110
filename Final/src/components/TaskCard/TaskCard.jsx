import './TaskCard.css';

import { useState } from 'react';
import removeTask from '../../utils/removeTab';

import trashIcon from '../../assets/delete.png';

const TaskCard = ({ task, tasks, setTasks,activeTab }) => {
    const [status, setStatus] = useState(task.active);

    const handleStatus = () => {
        task.active = !status;
        setStatus(!status);
        console.log(task);
    };

    return (
        <div className='task-card-container'>
            <input type='checkbox' checked={status} onChange={handleStatus}/>
            <p className={`task-status ${status === true ? "finish" : ""}`}>{task.text}</p>
            {activeTab === 'completed' &&
                <button onClick={() => removeTask(task, tasks, setTasks)}><img src={trashIcon} alt='delele icon'/></button>
            }
        </div>
    );
};

export default TaskCard;