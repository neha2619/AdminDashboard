import React from 'react'

import './settingscard.css'

const SettingstCard = props => {
    return (
        <div className='settings-card'>
            <div className="settings-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="settings-card__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default SettingstCard
