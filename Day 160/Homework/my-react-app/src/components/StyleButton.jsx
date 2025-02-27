import React from 'react';

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  margin: '10px'
};

function StyleButton() {
  return (
    <button style={buttonStyle}>
      Style Object Button
    </button>
  );
}

export default StyleButton;
