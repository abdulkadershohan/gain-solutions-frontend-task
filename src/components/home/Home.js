import React from 'react'
import Chart from '../chartSection/Chart'
import Navbar from '../navbar/Navbar'
import Products from '../products/Products'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Chart />
            <Products />
        </div>
    )
}
