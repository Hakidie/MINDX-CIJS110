const removeAllTab = (tasks, setTasks) => {
    const updatedTasks = [];
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
};

export default removeAllTab;