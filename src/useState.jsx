import { useState } from 'react';

function CounterApp() {
  // 1. Declare state variables
  // Syntax: [value, setter] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ 
      background: isDarkMode ? '#333' : '#fff', 
      color: isDarkMode ? '#fff' : '#000',
      padding: '20px' 
    }}>
      <h1>Count: {count}</h1>
      
      {/* 2. Update state using the setter functions */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default CounterApp