const addTask = (tasks, setTasks, inputValue, setInputValue) => {
    if (inputValue.trim() === '') {
        console.log("Empty task, no task added.");
        return;
    }

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 0,
        text: inputValue,
        active: true
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
    
    setInputValue('');
    console.log("Added new task");
};

export default addTask;
