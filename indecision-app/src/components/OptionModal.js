import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal 
      isOpen={!!props.selectedOption} // true
      contentLabel="Selected Option"
      onRequestClose={props.handleClearSelectedOption}
      selectedOption={props.selectedOption}

    >
      <h3>Select Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearSelectedOption}>Okay</button> 
    </Modal>
  ) 
}

export default OptionModal;