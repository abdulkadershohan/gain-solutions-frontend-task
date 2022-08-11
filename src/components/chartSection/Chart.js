import React from 'react'
import data from '../../store/Data'
import BarChart from '../barChart/Barchart'
import PiChart from '../piChart/PiChart'

export default function Chart() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-6">
                    <PiChart data={data} />

                </div>
                <div className="col-6">
                    <BarChart data={data} />
                </div>
            </div>
        </div>
    )
}
