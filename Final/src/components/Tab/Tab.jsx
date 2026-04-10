import './Tab.css';

import { useState } from 'react';

import TaskCard from '../../components/TaskCard/TaskCard';

const Tab = ({ tasks, setTasks, activeTab }) => {
    return (
        <div className='tab-container'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} activeTab={activeTab} />
            ))}
        </div>
    );
};

export default Tab;