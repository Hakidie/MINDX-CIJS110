import './ToDo.css';

import { useState } from 'react';
import taskFilter from '../../utils/taskFilter';

import TabBar from '../../components/TabBar/TabBar';
import ToolBar from '../../components/ToolBar/ToolBar';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import Tab from '../../components/Tab/Tab';

const ToDo = () => {
    const [activeTab, setActiveTab] = useState('all');

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('myTasksss');

        if (savedTasks) {
            return JSON.parse(savedTasks);
        } else {
            const defaultTasks = [
                { id: 0, text: "Demo task 1", active: true },
                { id: 1, text: "Demo task 2", active: false },
            ];
            localStorage.setItem('myTasksss', JSON.stringify(defaultTasks));
            return defaultTasks;
        }
    });

    console.log(tasks);

    return (
        <div className='todo-page-container'>
            <div className='page-title'>
                <h1>#todo</h1>
            </div>

            <div className='page-content-container'>
                <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab !== 'completed' &&
                    <ToolBar tasks={tasks} setTasks={setTasks}/>
                }

                <div className='tasks-container'>
                    {activeTab === 'all' && <Tab tasks={tasks} setTasks={setTasks} activeTab={activeTab} />}
                    {activeTab === 'active' && <Tab tasks={taskFilter(tasks, true)} setTasks={setTasks} activeTab={activeTab} />}
                    {activeTab === 'completed' && <Tab tasks={taskFilter(tasks, false)} setTasks={setTasks} activeTab={activeTab} />}
                </div>

                {activeTab === 'completed' &&
                    <DeleteButton setTasks={setTasks}/>
                }
            </div>
        </div>
    );
};

export default ToDo;