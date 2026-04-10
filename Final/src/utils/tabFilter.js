const tabFilter = (tasks, active) => {
    let filtedList = tasks.filter((task) => task.active === !active);
    return filtedList;
};

export default tabFilter;