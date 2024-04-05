import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App;
