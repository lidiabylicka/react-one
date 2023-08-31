import React, { useState } from 'react';
import Outcome from './outcome'; 

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="clicks">
        <h1>Praca domowa #1</h1>
      <button className="button" onClick={() => setCount((count) => count + 1)}>
        Dodaj Klik
      </button>
      <Outcome count={count} />
    </div>
  );
}

export default Button;