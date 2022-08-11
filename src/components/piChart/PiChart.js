import React from 'react'
import { defaults, Pie } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'right'
export default function PiChart() {
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
                Sources
            </h1>
            <div
                style={{
                    height: 300,
                    width: 500,
                }}
            >

                <Pie
                    data={{
                        labels: ['Daraz', 'Pickaboo', 'Bikroy',],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [30, 35, 30],
                                backgroundColor: [
                                    '#84AF27',
                                    '#FFC239',
                                    '#0095A0',

                                ],

                                borderWidth: 0,
                            },
                            // {
                            //   label: 'Quantity',
                            //   data: [47, 52, 67, 58, 9, 50],
                            //   backgroundColor: 'orange',
                            //   borderColor: 'red',
                            // },
                        ],
                    }}
                    height={400}
                    width={600}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                            //  display: false,
                            position: 'right',

                            //  pointLabel: '10%',


                            labels: {
                                fontSize: 16,
                                color: '#74777B',
                                frontWeight: 400,


                            },
                        },
                    }}
                />
            </div>
        </div>


    )
}

