const removeTask = (task, tasks, setTasks) => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
    console.log("Removed task.");
};

export default removeTask;