import React, { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <main>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </main>
    );
}

export default App;