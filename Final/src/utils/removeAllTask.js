const removeAllTask = (setTasks) => {
    const updatedTasks = [];
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
    console.log("Deleted all task data.");
};

export default removeAllTask;