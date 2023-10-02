import React from 'react';
import './Assistant.css';
import avatar from './avatar.png';

function Assistant() {
  

  return (
    <div>
      {avatar}
      <div className="avatar">

      </div>
      <div className="content">
        <p>Hello! I'm your on-page assistant.</p>
        <p>Click the button to see what I can do.</p>
        
      </div>
    </div>
  );
}

export default Assistant;
