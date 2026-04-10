const removeTab = (task, tasks, setTasks) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
};

export default removeTab;