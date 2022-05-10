import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'New Workers',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'New Companies',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topUsers = {
    head: [
        'user',
        'profile',
        'ratings'
    ],
    body: [
        {
            "username": "john doe",
            "profile": "worker",
            "ratings": "4.4"
        },
        {
            "username": "frank iva",
            "profile": "worker",
            "ratings": "4.3"
        },
        {
            "username": "anthony baker",
            "profile": "company",
            "ratings": "4.3"
        },
        {
            "username": "frank iva",
            "profile": "company",
            "ratings": "4.2"
        },
        {
            "username": "anthony baker",
            "profile": "worker",
            "ratings": "4"
        }
    ]
}

const renderUserHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderUserBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.profile}</td>
        <td>{item.ratings}</td>
    </tr>
)

const latestRequest = {
    header: [
        "serial",
        "Company",
        "Type",
        "Vacancy",
        "status"
    ],
    body: [
        {
            serial: "1",
            Company: "Abc pvt ltd",
            Vacancy: "17",
            Type: "Plumber",
            status: "rejected"
        },
        {
            serial: "2",
            Company: "frank iva",
            Vacancy: "16",
            Type: "painter",
            status: "hired"
        },
        {
            serial: "3",
            Company: "anthony bakers",
            Vacancy: "8",
            Type: "maison",
            status: "pending"
        },
        {
            serial: "4",
            Company: "frank iva",
            Vacancy: "4",
            Type: "plumber",
            status: "hired"
        },
        {
            serial: "5",
            Company: "anthony bakers",
            Vacancy: "2",
            Type: "carpenter",
            status: "rejected"
        }
    ]
}

const requestStatus = {
    "pending": "warning",
    "hired": "success",
    "rejected": "danger"
}

const renderRequestHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderRequestBody = (item, index) => (
    <tr key={index}>
        <td>{item.serial}</td>
        <td>{item.Company}</td>
        <td>{item.Type}</td>
        <td>{item.Vacancy}</td>
        <td>
            <Badge type={requestStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <Link to={item.route} key={index}>
                                    <StatusCard
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
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                         />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>top users</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topUsers.head}
                                renderHead={(item, index) => renderUserHead(item, index)}
                                bodyData={topUsers.body}
                                renderBody={(item, index) => renderUserBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest requests</h3>
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
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
