import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
    padding: '1rem',
    backgroundColor: '#f0f0f0', 
    color: '#333', 
  };

  const cardStyle = {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    backgroundColor: '#008CBA', 
    color: '#fff',
    padding: '0.75rem 1.5rem',
    margin: '0.5rem',
    border: 'none',
    borderRadius: '0.3rem',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#005f73', 
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>Contador</h2>
        <p style={{ fontSize: '1.25rem', margin: '2rem 0' }}>
          El valor actual es: <span style={{ color: '#4CAF50' }}>{count}</span>
        </p>
        <div style={{ display: 'flex' }}>
          <button
            onClick={increment}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#005f73')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#008CBA')}
          >
            Incrementar
          </button>
          <button
            onClick={reset}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#005f73')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#008CBA')}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
