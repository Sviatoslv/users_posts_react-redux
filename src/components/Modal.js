import React from 'react';
import PropTypes from 'prop-types';
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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}