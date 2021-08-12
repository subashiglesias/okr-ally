import React, {useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getOkrs} from '../../actions'

import './Okr.css'
import {renderIfElse} from "../../utils/helpers";
import Loader from "../ComCom/Loader";
import DropDown from "../ComCom/DropDown";
import {OKR} from '../../utils/constants'
import {getOkr} from "../../utils/redux-selectors";
import OkrCard from "./OkrCard";

const Okr = () => {
    const {parentIds, okrResults, showLoader, category} = useSelector(state => getOkr(state));
    const dispatch = useDispatch();

    const [selectedCategoryList, setSelectedCategoryList] = useState([]);

    useEffect(() => {
        dispatch(getOkrs());
    }, [dispatch])

    useEffect(() => {
        setSelectedCategoryList(parentIds)
    }, [parentIds])

    const onCategoryChange = (event) => {
        if (event.target.value === 'All') {
            return setSelectedCategoryList(parentIds)
        }
        setSelectedCategoryList(parentIds.filter(id => okrResults[id].category === event.target.value))
    }
    return (
        renderIfElse(() => showLoader,
            () => <Loader/>,
            () =>
                <div className="okr">
                    {renderIfElse(() => category && category.length,
                        () =>
                            <Fragment>
                                <div className="okr-category">
                                    {/*A common dropDown component that can be used anywhere*/}
                                    <DropDown className={OKR.category.className} label={OKR.category.label}
                                              defaultValue={OKR.category.defaultValue} values={category}
                                              onChange={onCategoryChange}/>
                                </div>
                                {selectedCategoryList.map((id,index) => <OkrCard key={id} index={index+1} cardData={okrResults[id]} id={id}/>)}
                            </Fragment>,
                        () => <span className="okr-empty">No Objectives & Key Results Found</span>)}
                </div>
        )
    )
}

export default Okr;