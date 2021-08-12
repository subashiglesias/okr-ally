import React, {useRef} from 'react';
import ReactDOM from "react-dom";
import Close from '../../../../images/close.svg'
import PropTypes from "prop-types";

import './Modal.css'

const Modal = ({header ,children, updateModalState}) => {
    const modalRef = useRef(null);

    const onCloseHandler = () => {
        updateModalState();
    };

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-wrapper" ref={modalRef}>
                <button className="modal-close" onClick={onCloseHandler}>
                    <img src={Close} alt="close" />
                </button>
                <div className="modal-header">
                    <h2>{header}</h2>
                </div>
                <hr />
                <div className="modal-content">{children}</div>
                <div className="modal-footer">
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