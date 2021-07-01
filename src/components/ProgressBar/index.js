import React, { Fragment } from 'react';

const ProgressBar = ({idQuestion, maxQuestion}) => {

    const getPercent = (maxQuestion, idQuestion) => {
        return (100 / maxQuestion) * idQuestion
    }
    const progressWidth = getPercent(maxQuestion, idQuestion + 1);
    return (
        <Fragment>
        <div className="percentage">
            <div className="progressPercent">Question: {idQuestion + 1}/{maxQuestion}</div>
            <div className="progressPercent">Progression: {progressWidth}%</div>
        </div>
        <div className="progressBar">
            <div className="progressBarChange" style={{width: `${progressWidth}%`}}></div>
        </div>
        </Fragment>
    )
}

export default React.memo(ProgressBar);