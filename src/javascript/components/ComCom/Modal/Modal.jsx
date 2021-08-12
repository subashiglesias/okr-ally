import React from 'react';
import ReactDOM from "react-dom";
import Close from '../../../../images/close.svg'
import PropTypes from "prop-types";

import './Modal.css'

const Modal = ({header ,children, updateModalState}) => {
    const onCloseHandler = () => {
        updateModalState();
    };

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal__wrapper">
                <button className="modal__close" onClick={onCloseHandler}>
                    <img src={Close} alt="close" />
                </button>
                <div className="modal__header">
                    <h2>{header}</h2>
                </div>
                <div className="modal__content">{children}</div>
                <div className="modal__footer">
                    <button onClick={onCloseHandler}>Cancel</button>
                </div>
            </div>
        </div>,
        document.body
    );
}

Modal.propTypes = {
    header: PropTypes.string,
    updateModalState: PropTypes.func,
    children: PropTypes.array
};

export default Modal;