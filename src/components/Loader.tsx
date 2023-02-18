import React, { useState, useEffect } from 'react';

export const Loader: React.FC = () => {
  const [dots, setDots] = useState<string>('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') {
          return '';
        }
        return `${prevDots}.`;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return <p className="text-white whitespace-pre-line">{dots}</p>;
};

export default Loader;
