import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'





const chartOptions = {
    series: [{
        name: 'New Workers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 18,0,30]
    }, {
        name: 'New Companies',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10,4,6]
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
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','oct','nov','dec']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}
const barChart = {
    series: [{
        data: [{
            x: 'Total Worker',
            y: 90
        }, {
            x: 'Total Company',
            y: 188
        },]
    }],
    options: {
        chart: {
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },

    }
}


const columnChart = {
    series: [{
        name: 'Workers Request',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Companies Request',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: 'thousands'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
};

const radialChart = {
    series: [55, 67, 83],
    options: {
        chart: {
            height: 350,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 195
                        }
                    }
                }
            }
        },
        labels: ['Requested', 'Hired', 'Registered'],
    },


};







export const Analytics = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    return (
        <div>
            <h2 className="page-header">Requests</h2>
            <div className="row">
                <div className="col-8">


                    <div className="card full-height">

                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />

                    </div>
                </div>
                <div className="col-4">

                    <div className="card full-height">
                        <div className="row">
                            {/* chart */}
                            <Chart
                                options={themeReducer === 'theme-mode-dark' ? {
                                    ...columnChart.options,
                                    theme: { mode: 'dark' }
                                } : {
                                    ...columnChart.options,
                                    theme: { mode: 'light' }
                                }}

                                series={columnChart.series}
                                type='bar'
                                height='200%'
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <div className="row-4">
                        <div className="card full-height">

                            {/* chart */}
                            <Chart
                                options={themeReducer === 'theme-mode-dark' ? {
                                    ...barChart.options,
                                    theme: { mode: 'dark' }
                                } : {
                                    ...barChart.options,
                                    theme: { mode: 'light' }
                                }}
                                series={barChart.series}
                                type='bar'
                                height='200%'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-4">

                    <div className="card full-height">
                        <div className="row">
                            {/* chart */}
                            <Chart
                                options={radialChart === 'theme-mode-dark' ? {
                                    ...radialChart.options,
                                    theme: { mode: 'dark' }
                                } : {
                                    ...radialChart.options,
                                    theme: { mode: 'light' }
                                }}

                                series={radialChart.series}
                                type='radialBar'
                                height='200%'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
