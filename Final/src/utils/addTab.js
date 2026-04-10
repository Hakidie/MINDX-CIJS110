const addTab = (tasks, setTasks, inputValue, setInputValue) => {
    if (inputValue.trim() === '') return;

    const newTask = {
        id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 0,
        text: inputValue,
        active: true
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('myTasksss', JSON.stringify(updatedTasks));
    setInputValue('');
};

export default addTab;
