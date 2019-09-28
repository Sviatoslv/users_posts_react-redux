import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
    {isOpen && 
    <div className="modal">
      <div className="modal__contaiter">
        {children}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="button button--close"
        >
          <span className="visually-hidden">Close</span>
        </button>
      </div>
    </div>}
    </>
)}

export default Modal;
