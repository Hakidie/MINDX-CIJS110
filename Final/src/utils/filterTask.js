const filterTask = (tasks, activeTab) => {
    if (activeTab === 'all') return tasks;
    if (activeTab === 'active') return tasks.filter(task => task.active === true);
    if (activeTab === 'completed') return tasks.filter(task => task.active === false);
    return tasks;
};

export default filterTask;