import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event) {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}

    />
    <div className='test' >fujklzeafjzeklfjzeklfzjfzejfklzjf</div>
    </>
  );
}

export default CustomCursor;