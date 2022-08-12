import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../store/Data'
import { HeaderTitle, PhoneNameSubTitle, PhoneNameTitle } from '../../utilitty'
import Loader from '../loader/Loader'
import './Products.css'

export default function Products() {
    const [page, setPage] = React.useState(1)
    const [data2, setData2] = React.useState(data.slice(0, 20))


    const fetchMoreData = () => {
        setTimeout(() => {

            if (data.length > data2.length) {
                setData2(data2.concat(data.slice(0, page * 20)))
            }
        }, 500)

        // this.setState({
        //     items: this.state.items.concat(Array.from({ length: 20 }))
        // });   

    }


    const RenderTableData = (item) => {
        return (
            <div className="row py-4 align-items-center">
                <div className="col-3 d-flex align-items-center phone gap-3 ">
                    <img src={'https://www.bdprice.com.bd/wp-content/uploads/2020/12/Oukitel-C21.jpg'} alt="" />
                    <div className='pt-4'>
                        <PhoneNameTitle title={'Samsung Galaxy S22 '} />
                        <PhoneNameSubTitle title={'Samsung'} />
                    </div>
                </div>
                <div className="col-3">
                    <PhoneNameSubTitle title={'4/64'} />
                </div>
                <div className="col-3">
                    <span class="badge bg-secondary">New</span>
                </div>
                <div className="col-3">
                    <PhoneNameSubTitle title={'TK 150,000'} />
                </div>
            </div>
        )
    }

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
            {/* {
                data.map((item, index) => {
                    return (
                        <RenderTableData
                            item={item}
                            key={Math.random()}
                        />
                    )
                })
            } */}
            <InfiniteScroll
                dataLength={data2.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<Loader />}
            >
                {
                    data2.map((item, index) => {
                        return (
                            <RenderTableData
                                item={item}
                                key={Math.random()}
                            />
                        )
                    })
                }
            </InfiniteScroll>


        </div>
    )
}