import React from 'react'
import { HeaderTitle } from '../../utilitty'
import './Products.css'

export default function Products() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6">
                    <HeaderTitle title={'ALL Products'} />

                </div>
                <div className="col-6">
                    <div className="d-flex align-items-end flex-column">
                        <form>
                            <label className='dropdown-label  ' htmlFor="cars">Sort by:</label>
                            <select name="cars" id="cars" className='dropdown-product'>
                                <option value="All products">All products</option>
                                <option value="Best value">Best value</option>
                                <option value="Best Performance">Best Performance</option>
                                <option value="audi">Best Camera</option>
                            </select>
                            <br />

                        </form>
                    </div>
                </div>
            </div>
            <div className="row py-4">
                <div className="col-3">
                    <p className='table-title'>Model</p>
                </div>
                <div className="col-3">
                    <p className='table-title'>Ram/Rom</p>
                </div>
                <div className="col-3">
                    <p className='table-title'>Tag</p>
                </div>
                <div className="col-3">
                    <p className='table-title'>Price</p>
                </div>
            </div>

        </div>
    )
}
