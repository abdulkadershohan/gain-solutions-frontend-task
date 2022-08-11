import React from 'react';
import { Bar } from 'react-chartjs-2';

// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const BarChart = ({ data }) => {
    console.log(data)
    const unofficial_warranty = data.filter(item => item.unofficial_warranty === true).length
    const official_warranty = data.filter(item => item.official_warranty === true).length
    const without_warranty = data.filter(item => item.no_warranty === true).length
    const used_phone = data.filter(item => item.used_phone === true).length
    return (
        <div>
            <h1 style={{
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '36px',
                color: '#575757',
                paddingTop: '20px',
                paddingBottom: '20px',


            }}>
                Conditions
            </h1>
            <div
                style={{
                    height: 300,
                    width: '100%',
                }}
            >
                <Bar
                    data={{
                        labels: ['Official', 'Unofficial', 'Without warranty', 'Used', ''],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [official_warranty, unofficial_warranty, without_warranty, used_phone,],
                                backgroundColor: [
                                    '#0095A0',
                                    '#0095A0',
                                    '#0095A0',
                                    '#0095A0',

                                ],






                            },

                        ],


                    }}
                    height={400}
                    width={600}
                    options={{

                        maintainAspectRatio: false,
                        scales: {

                            yAxes: [
                                // {
                                //     gridLines: {
                                //         borderDash:  [8, 4],
                                //         color: "#EBEBEB"
                                //     }
                                // },
                                {
                                    ticks: {
                                        beginAtZero: true,
                                    },
                                },

                            ],
                            xAxes: [{
                                barPercentage: 0.2
                            },
                                // {
                                //     gridLines: {
                                //         borderDash: [8, 4],
                                //         color: "#EBEBEB"
                                //     }
                                // },


                            ]
                        },
                        legend: {
                            display: false,
                        },
                    }}

                />
            </div>

        </div>
    )
}

export default BarChart