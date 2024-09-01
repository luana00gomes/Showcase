import React from 'react';
import './terminal.css';

const CodeTerminal = ({ children }) => {
  const user = "Users/Luana >";
  
  return (
    <div className="code-terminal">
      <div className="code-terminal-header">
        <span className="code-terminal-dot red"></span>
        <span className="code-terminal-dot yellow"></span>
        <span className="code-terminal-dot green"></span>
      </div>
      <pre className="code-terminal-content">
        <div className='code-terminal-fixed'>
          <span className="code-terminal-user">{user}</span>
          <span className="code-terminal-input">npm start</span>
        </div>

        {children}
      </pre>
    </div>
  );
};

export default CodeTerminal;
