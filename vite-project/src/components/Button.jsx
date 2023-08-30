import React , { useState } from 'react';
import Outcome from './outcome';

const Button = () => {
    const [count, setCount] = useState(0);
    return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
        Dodaj Klik        
    </button>
    );
}

export default Button;