import React from 'react'
import settingsCards from '../assets/JsonData/settings-card-data.json'
import SettingstCard from '../components/settings-card/SettingsCard'
import { Link } from 'react-router-dom'



export const Settings = () => {
    return (
        <div>
            <h2 className="page-header">Settings</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            settingsCards.map((item, index) => (
                                <div className="col-6">
                                    <Link to={item.route} key={index}>
                                    <SettingstCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                        
                                        
                                    />
                                    </Link>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
