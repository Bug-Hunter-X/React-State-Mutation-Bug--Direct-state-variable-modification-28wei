```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using setCount to update the state
    setCount(prevCount => prevCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```