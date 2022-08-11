import React from 'react'
import { defaults, Pie } from 'react-chartjs-2'
import { HeaderTitle } from '../../utilitty'

defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'right'
export default function PiChart({ data }) {

    const countDarazItems = data.filter(item => item.seller_name === "Daraz").length
    const countBikroyItems = data.filter(item => item.ad_category === "Bikroy.com").length
    const countPickabooItems = data.filter(item => item.seller_name === "Pickaboo").length

    const totalItems = countDarazItems + countBikroyItems + countPickabooItems;
    const darazPercentage = parseInt((countDarazItems / totalItems) * 100)
    const bikroyPercentage = parseInt((countBikroyItems / totalItems) * 100)
    const pickabooPercentage = parseInt((countPickabooItems / totalItems) * 100)


    return (
        <div>
            <HeaderTitle title='Sources' />

            <div
                style={{
                    height: 300,
                    width: 500,
                }}
            >

                <Pie
                    data={{
                        labels: [`Daraz: ${darazPercentage} %`, `Daraz: ${pickabooPercentage} %`, `Daraz: ${bikroyPercentage} %`],
                        datasets: [
                            {
                                label: '# of votes',
                                data: [countPickabooItems, countDarazItems, countBikroyItems],
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

