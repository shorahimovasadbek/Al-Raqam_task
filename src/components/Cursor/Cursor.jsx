import React, { useRef, useEffect } from 'react';
import './cursor.css';
import massiv from '../InfoLanguage/LangMass';


export default function Cursor() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);
  (localStorage.getItem("massiv") ? localStorage.getItem('massiv') : localStorage.setItem('massiv', JSON.stringify(massiv)))
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = cursorRef.current;
      const cursor2 = cursor2Ref.current;
      if (cursor && cursor2) {
        cursor.style.cssText = cursor2.style.cssText =
          'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div ref={cursor2Ref} className="cursor2"></div>
      <div ref={cursorRef} className="cursor"></div>
    </div>
  );
}

