const updateTask = (task, tasks, setTasks) => {
    const updatedTasks = tasks.map(t => {
        if (t.id === task.id) {
            return { ...t, active: !task.active};
        }
        return t;
    });
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
    console.log("Updated status of task id = " + task.id);
};

export default updateTask;