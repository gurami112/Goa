import React from 'react';

function InlineButton() {
  return (
    <button
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px'
      }}
    >
      Inline Styled Button
    </button>
  );
}

export default InlineButton;
