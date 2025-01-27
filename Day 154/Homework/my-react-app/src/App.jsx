import { useEffect, useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);

  // Sync account to localStorage
  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(account));
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("students", JSON.stringify(students));
  }, [account, accounts, students]);

  // Load accounts and account from localStorage on mount
  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem("students")) || []);
    setAccounts(JSON.parse(localStorage.getItem("accounts")) || []);
    setAccount(JSON.parse(localStorage.getItem("account")) || null);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    if (accounts.some((acc) => acc.email === newAccount.email)) {
      alert("Account already exists. Please log in.");
      return;
    }

    setAccounts([...accounts, newAccount]);
    alert("Account created successfully!");
    e.target.reset();
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const enteredAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    const loggedInUser = accounts.find(
      (acc) =>
        acc.email === enteredAccount.email && acc.pass === enteredAccount.pass
    );

    if (!loggedInUser) {
      alert("Invalid credentials. Please try again.");
      return;
    }

    setAccount(loggedInUser);
    alert("Logged in successfully!");
    e.target.reset();
  };

  const logout = () => {
    setAccount(null);
    alert("Logged out successfully!");
  };

  // Add a student
  const addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: e.target.studentName.value,
      lastname: e.target.studentLastname.value,
      age: e.target.studentAge.value,
    };

    setStudents([...students, student]);
  };

  // Delete a student
  const deleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  // Update a student
  const updateStudent = (index, updatedStudent) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? updatedStudent : student
    );
    setStudents(updatedStudents);
  };

  // Update admin account
  const updateAccount = (e) => {
    e.preventDefault();
    const updatedAccount = {
      email: e.target.email.value,
      pass: e.target.pass.value,
    };

    setAccounts(
      accounts.map((acc) =>
        acc.email === account.email ? updatedAccount : acc
      )
    );
    setAccount(updatedAccount);
    alert("Account updated successfully!");
  };

  return (
    <main>
      {account === null ? (
        <section>
          <form onSubmit={handleRegister}>
            <h1>Registration</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>

          <form onSubmit={handleSignin}>
            <h1>Login</h1>
            <input type="email" name="email" required />
            <input type="password" name="pass" required />
            <button>Submit</button>
          </form>
        </section>
      ) : (
        <section>
          <h1>Hello {account.email}</h1>
          <button onClick={logout}>Log out</button>

          <form onSubmit={updateAccount}>
            <h2>Update Account</h2>
            <input
              type="email"
              name="email"
              defaultValue={account.email}
              required
            />
            <input
              type="password"
              name="pass"
              defaultValue={account.pass}
              required
            />
            <button>Update Account</button>
          </form>

          <div>
            <form onSubmit={addStudent}>
              <input
                type="text"
                name="studentName"
                placeholder="Student Name"
                required
              />
              <input
                type="text"
                name="studentLastname"
                placeholder="Student Lastname"
                required
              />
              <input
                type="number"
                name="studentAge"
                placeholder="Student Age"
                required
              />
              <button>Add Student</button>
            </form>
          </div>

          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.lastname}</td>
                  <td>{student.age}</td>
                  <td>
                    <button onClick={() => deleteStudent(index)}>Delete</button>
                    <button
                      onClick={() => {
                        const newName = prompt("Enter new name:", student.name);
                        const newLastname = prompt(
                          "Enter new lastname:",
                          student.lastname
                        );
                        const newAge = prompt("Enter new age:", student.age);

                        if (newName && newLastname && newAge) {
                          updateStudent(index, {
                            name: newName,
                            lastname: newLastname,
                            age: newAge,
                          });
                        }
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
