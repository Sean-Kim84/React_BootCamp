import React from 'react';

const Action = (props) => (
  <div className="big-button">
    <button 
      onClick={props.handlePick}
      disabled={!props.hasOptions}>
      What should I do?
    </button>
  </div>
);

export default Action;