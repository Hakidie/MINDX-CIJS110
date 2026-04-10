import './ToDo.css';

import { useState } from 'react';
import tabFilter from '../../utils/tabFilter';
import addTab from '../../utils/addTab';

import TabBar from '../../components/TabBar/TabBar';
import InputBar from '../../components/InputBar/InputBar';
import AddButton from '../../components/AddButton/AddButon';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import Tab from '../../components/Tab/Tab';

const ToDo = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [inputValue, setInputValue] = useState('');

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
                    <div className='input-container'>
                        <InputBar inputValue={inputValue} setInputValue={setInputValue} />
                        <AddButton addTab={addTab} tasks={tasks} setTasks={setTasks} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                }

                <div className='tasks-container'>
                    {activeTab === 'all' && <Tab tasks={tasks} setTasks={setTasks} activeTab={activeTab} />}
                    {activeTab === 'active' && <Tab tasks={tabFilter(tasks, true)} setTasks={setTasks} activeTab={activeTab} />}
                    {activeTab === 'completed' && <Tab tasks={tabFilter(tasks, false)} setTasks={setTasks} activeTab={activeTab} />}
                </div>

                {activeTab === 'completed' &&
                    <DeleteButton setTasks={setTasks}/>
                }
            </div>
        </div>
    );
};

export default ToDo;