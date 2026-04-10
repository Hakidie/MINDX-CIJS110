const taskFilter = (tasks, active) => {
    const filtedList = tasks.filter(task => task.active === active);
    return filtedList;
};

export default taskFilter;