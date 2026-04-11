const filterTask = (tasks, activeTab) => {
    switch (activeTab) {
        case 'all': return tasks;
        case 'active': return tasks.filter(task => task.active === true);
        case 'completed': return tasks.filter(task => task.active === false);
        default: return tasks;
    };
};

export default filterTask;