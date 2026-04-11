import './Tab.css';

import TaskCard from '../../components/TaskCard/TaskCard';
import filterTask from '../../utils/filterTask';

const Tab = ({ tasks, setTasks, activeTab }) => {
    const filteredTasks = filterTask(tasks, activeTab);

    return (
        <div className='tab-container'>
            {filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} activeTab={activeTab} />
            ))}
        </div>
    );
};

export default Tab;