import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import data from '../../store/Data'
import { Badge, HeaderTitle, PhoneNameSubTitle, PhoneNameTitle } from '../../utilitty'
import Loader from '../loader/Loader'
import './Products.css'

export default function Products() {
    const [page, setPage] = React.useState(1)
    const [data2, setData2] = React.useState(data.slice(0, 20))
    const [loading, setLoading] = React.useState(true)


    const fetchMoreData = () => {
        setTimeout(() => {
            if (data.length > data2.length) {
                setData2(data2.concat(data.slice(0, page * 20)))
            }

        }, 1000)
    }

    React.useEffect(() => {
        if (data.length < data2.length) {
            setLoading(false)
        }
    }, [data2])
    console.log(data2.length)


    const RenderTableData = (item) => {
        let phoneName = item.item.phone_title
        let brand = item.item.brand
        let ram_rom = item.item.ram + '/' + item.item.storage
        let phone_price = item.item.phone_price
        let best_camera = item.item.speciality.filter((item) => item.includes('camera'))
        let best_performance = item.item.speciality.filter((item) => item.includes('Gaming specific chipset')) || item.item.speciality.filter((item) => item.includes('Fast chipset for heavy usage'))
        let best_value = item.item.speciality.filter((item) => item.includes(`Good performance for it's price`))

        let image = item.item.phone_images
        // console.log(
        //     // item.item.speciality //=== "E-commerce"
        //     // best_camera
        //     image[0]
        // )

        return (
            <div className="row py-4 align-items-center product-container  ">
                <div className="col-4 d-flex align-items-center phone gap-3 ">
                    <img src={image[0]} alt="phone-img" />
                    <div className='pt-4 '>
                        <PhoneNameTitle title={phoneName} />
                        <PhoneNameSubTitle title={brand} />
                    </div>
                </div>
                <div className="col-2">
                    <PhoneNameSubTitle title={ram_rom} />
                </div>
                <div className="col-4 ">
                    {
                        best_camera.length > 0 && (
                            <Badge title={'Best Camera'} />

                        )}
                    <span style={{
                        // marginLeft: '5px',
                        marginRight: '10px'
                    }}></span>

                    {
                        best_performance.length > 0 && (
                            <Badge title={'Best Performance'} />
                        )}


                    {
                        best_value.length > 0 && (
                            <Badge title={'Best Value'} />
                        )}


                </div>
                <div className="col-2 d-flex align-items-end flex-column ">
                    <PhoneNameSubTitle title={`TK ${phone_price}`} />
                </div>

            </div >
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
                <div className="col-4">
                    <p className='table-title'>Model</p>
                </div>
                <div className="col-2">
                    <p className='table-title'>Ram/Rom</p>
                </div>
                <div className="col-4">
                    <p className='table-title'>Tag</p>
                </div>
                <div className="col-2">
                    <p className='table-title d-flex align-items-end flex-column '>Price</p>
                </div>
            </div>

            <InfiniteScroll
                dataLength={data2.length}
                next={fetchMoreData}
                hasMore={true}
                loader={loading && <Loader />}
            >
                {/* {
                    Object.keys(data2).map((item, index) => {
                        return (
                            <RenderTableData
                                item={data2[item]}
                                key={Math.random()}
                            />
                        )
                    })

                } */}
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