import React from 'react'
import Table from '../components/table/Table'
import '../components/topnav/topnav.css'

import companyList from '../assets/JsonData/company-list.json'

const companyTableHead = [
    
    'name',
    'email',
    'phone',
    'cin',
    'gstin',
    'location'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.cin}</td>
        <td>{item.gstin}</td>
        <td>{item.location}</td>
    </tr>
)


const Companies = () => {
    return (
        <div>
            <h2 className="page-header">
                companies
                <div className="topnav__search">
                    <input type="text" placeholder='Search here...' />
                    <i className='bx bx-search'></i>
                </div>
            </h2>
            
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={companyTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={companyList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Companies
