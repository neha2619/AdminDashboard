import React from 'react'

import './requestcard.css'

const RequestCard = props => {
    return (
        <div className='request-card'>
            <div className="request-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="request-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default RequestCard
