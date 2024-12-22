import React, { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [taskName, setTaskName] = useState('');
    const [category, setCategory] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (taskName && category) {
            setTasks([...tasks, { name: taskName, category, completed: false }]);
            setTaskName('');
            setCategory('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter(task => filter === 'All' || task.category === filter);

    return (
        <main>
            <h1>Task Manager</h1>
            <div>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                </select>
                <button onClick={addTask}>Add Task</button>
            </div>
            <div>
                <label>Filter by Category: </label>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Study">Study</option>
                </select>
            </div>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(index)}
                        />
                        {task.name} ({task.category})
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default App;