import React from 'react';

const Button = () => {
    return (
    <button className="button" onClick={() => setCount((count) => count + 1)}>
        Dodaj Klik        
    </button>
    );
}

