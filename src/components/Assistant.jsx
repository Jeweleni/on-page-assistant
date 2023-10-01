import React, { useState } from 'react';

function Assistant() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`assistant ${isVisible ? 'visible' : ''}`}>
      <p>Hello! I'm your on-page assistant.</p>
      <p>Click the button to see what I can do.</p>
      <p>Dear Mentor, this is a letter of apology. Please have mercy and give me more time to complete this project. I was in the hospital the first two days the project started and I've spent most of the rest of the time working on the chrome extension project. </p>
      <p>Please have mercy "inserts kneeling down emoji"</p>
      <button onClick={toggleVisibility}>Close</button>
    </div>
  );
}

export default Assistant;
