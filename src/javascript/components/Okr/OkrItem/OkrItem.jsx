import React, {Fragment, useState} from 'react';
import Avatar from '../../../../images/avatar.png'
import './OkrItem.scss';
import {renderIf} from "../../../utils/helpers";
import Modal from "../../ComCom/Modal";
import PropTypes from "prop-types";

const OkrItem = ({data, id, index, parentTitle}) => {
    const [showModal, setShowModal] = useState(false);
    const title = data && data.title
    return (
        <Fragment>
            <div className={`okr-item ${parentTitle ? 'child' : ""}`} onClick={() => setShowModal(true)}>
                <img className="okr-item__avatar" src={Avatar} alt="Ω"/>
                {!parentTitle ? <span className='okr-item__content'>{index}. {title}</span>
                    : <li className='okr-item__child-content' key={id}>{title}</li>
                }
            </div>
            {
                renderIf(() => showModal, () => {
                    return (
                    <Modal header={title} updateModalState={() => setShowModal(false)}>
                        {Object.keys(data).map(keyValue => (
                            <span key={keyValue}><b>{keyValue}:</b> {data[keyValue]}</span>
                        ))}
                        {parentTitle && (
                            <span><b>Parent Objective</b>: {parentTitle}</span>
                        )}
                    </Modal>
                    )
                })
            }
        </Fragment>
    )
}

OkrItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        category: PropTypes.string,
        title: PropTypes.string,
        metric_name: PropTypes.string,
        metric_start: PropTypes.string,
        parent_objective_id: PropTypes.string,
        metric_target: PropTypes.string,
        archived: PropTypes.string
    }),
    id: PropTypes.string,
    index: PropTypes.number,
    parentTitle: PropTypes.string,
};

export default OkrItem;