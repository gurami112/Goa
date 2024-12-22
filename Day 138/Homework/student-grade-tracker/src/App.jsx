import React, { useState } from 'react';

function App() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [threshold, setThreshold] = useState(75);

    const addStudent = () => {
        if (name && grade) {
            const newStudent = {
                id: Date.now(),
                name,
                grade: parseFloat(grade)
            };
            setStudents([...students, newStudent]);
            setName('');
            setGrade('');
        }
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    const averageGrade = students.length > 0
        ? students.reduce((sum, student) => sum + student.grade, 0) / students.length
        : 0;

    return (
        <main>
            <h1>Student Grade Tracker</h1>
            <div>
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button onClick={addStudent}>Add Student</button>
            </div>
            <div>
                <label>Highlight Threshold: </label>
                <input
                    type="number"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                />
            </div>
            <h2>Average Grade: {averageGrade.toFixed(2)}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr
                            key={student.id}
                            style={{
                                backgroundColor: student.grade >= threshold ? 'lightgreen' : 'lightcoral'
                            }}
                        >
                            <td>{student.name}</td>
                            <td>{student.grade}</td>
                            <td>
                                <button onClick={() => deleteStudent(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default App;

