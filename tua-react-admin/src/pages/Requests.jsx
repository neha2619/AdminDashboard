import React from 'react'
import requestCards from '../assets/JsonData/requests-card-data.json'
import RequestCard from '../components/request-card/RequestCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import { Link } from 'react-router-dom'
import CompanyRequest from './CompanyRequest'






const latestRequest = {
    header: [

        "Company",
        "Type",
        "Vacancy",

    ],
    body: [
        {

            Company: "Abc pvt ltd",
            Vacancy: "17",
            Type: "Plumber",

        },
        {

            Company: "frank iva",
            Vacancy: "16",
            Type: "painter",

        },
        {

            Company: "anthony bakers",
            Vacancy: "8",
            Type: "maison",

        },
        {

            Company: "frank iva",
            Vacancy: "4",
            Type: "plumber",

        },
        {

            Company: "anthony bakers",
            Vacancy: "2",
            Type: "carpenter",

        }
    ]
}



const renderRequestHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderRequestBody = (item, index) => (
    <tr key={index}>

        <td>{item.Company}</td>
        <td>{item.Type}</td>
        <td>{item.Vacancy}</td>

    </tr>
)

export const Requests = () => {



    return (
        <div>
            <h2 className="page-header">Requests</h2>
            
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            requestCards.map((item, index) => (
                                <div className="col-6">
                                    <Link to={item.route} key={index}>
                                    <RequestCard
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
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>companies requests</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestRequest.header}
                                renderHead={(item, index) => renderRequestHead(item, index)}
                                bodyData={latestRequest.body}
                                renderBody={(item, index) => renderRequestBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/companyrequest'>view all</Link>
                        </div>

                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>workers requests</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestRequest.header}
                                renderHead={(item, index) => renderRequestHead(item, index)}
                                bodyData={latestRequest.body}
                                renderBody={(item, index) => renderRequestBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/workersrequest'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
