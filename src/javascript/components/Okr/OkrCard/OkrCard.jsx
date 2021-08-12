import React, {useState} from 'react';
import './OkrCard.scss'
import OkrItem from "../OkrItem";
import {getOkr} from "../../../utils/redux-selectors";
import {renderIf} from "../../../utils/helpers";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const OkrCard = ({cardData, id, index}) => {
    const [toggle, setToggle] = useState(true);
    const {parentWithChildren, okrResults} = useSelector(state => getOkr(state));

    const onToggle = () => {
        setToggle(prevState => !prevState)
    }

    const childIds = parentWithChildren[id];

    return (
        <ol type='a'>
            <div className='okr-card'>
                <button className={`okr-card__button ${toggle ? (childIds && childIds.length ? 'active' : '') : ''}`} onClick={onToggle}/>
                <OkrItem data={cardData} id={id} isChild={false} index={index}/>
            </div>
            {renderIf(() => toggle && childIds,
                () => {
                    return childIds.map(childId => {
                        return (
                            <div className='okr-card__content' key={childId}>
                                <OkrItem data={okrResults[childId]} id={childId} isChild={true}
                                         parentTitle={cardData.title}/>
                            </div>)
                    })
                })}
        </ol>
    )
}

OkrCard.propTypes = {
    cardData: PropTypes.shape({
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
};

export default OkrCard;