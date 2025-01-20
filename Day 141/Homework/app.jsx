import React, { useState, useEffect } from 'react';

const App = () => {
  const [timerCount, setTimerCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [windowMessage, setWindowMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerCount((prev) => prev + 1);
    }, 1000);

    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        setWindowMessage('ფანჯარა არის ჰორიზონტალური');
      } else {
        setWindowMessage('ფანჯარა არის ვერტიკალური');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeBackgroundColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>Loading... ({timerCount})</div>
      <div style={{ fontSize: '1.5rem', margin: '10px' }}>{windowMessage}</div>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default App;
