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
    const [selectedItem, setSelectedItem] = React.useState(null)


    const fetchMoreData = () => {
        //selectedItem === null ? data2.length : filterData.length
        if (selectedItem === null) {
            setTimeout(() => {
                if (data.length > data2.length) {
                    setData2(data2.concat(data.slice(0, page * 20)))
                }

            }, 1000)
        }
    }

    React.useEffect(() => {
        if (data.length < data2.length) {
            setLoading(false)
        }
    }, [data2])


    const RenderTableData = (item) => {
        let phoneName = item.item.phone_title
        let brand = item.item.brand
        let ram_rom = item.item.ram + '/' + item.item.storage
        let phone_price = item.item.phone_price
        const getRearCameraCount = item.item.phone_details.mainCamera.split(",").length - 1
        const getRearCameraSize = item.item.phone_details.mainCamera.slice(0, 2)
        const getSelfieCamera = item.item.phone_details.selfieCamera.slice(0, 2)

        let best_camera = item.item.phone_details.external.includes('microSD') && item.item.storage >= 64 && getSelfieCamera >= 13 && getRearCameraCount >= 3 && getRearCameraSize >= 16
        let best_value = item.item.phone_price <= 20000 && item.item.ram >= 4 && item.item.storage >= 128 && (item.item.brand === 'Xiaomi' || item.item.brand === 'Realme')

        const chipSet = item.item.phone_details.chipset.includes('Snapdragon')
        let best_performance = chipSet && item.item.phone_price < 20000 && item.item.ram > 4 && item.item.storage >= 128 && item.item.display_amoled === true && item.item.speciality.filter((item) => item.includes('1080p display'))
        let image = item.item.phone_images

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
                        best_camera && (
                            <Badge title={'Best Camera'} />

                        )}
                    <span style={{
                        // marginLeft: '5px',
                        marginRight: '10px'
                    }}></span>

                    {
                        best_performance && (
                            <Badge title={'Best Performance'} />
                        )}


                    {
                        best_value && (
                            <Badge title={'Best Value'} />
                        )}


                </div>
                <div className="col-2 d-flex align-items-end flex-column ">
                    <PhoneNameSubTitle title={`TK ${phone_price}`} />
                </div>

            </div >
        )
    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        setSelectedItem(e.target.value)
    }
    const filterData = data.filter((item) => {
        if (selectedItem === 'Best value') {
            return item.phone_price <= 20000 && item.ram >= 4 && item.storage >= 128 && (item.brand === 'Xiaomi' || item.brand === 'Realme')
        }
        if (selectedItem === 'Best Camera') {
            const getSelfieCamera = item.phone_details.selfieCamera.slice(0, 2)
            const getRearCameraCount = item.phone_details.mainCamera.split(",").length - 1
            const getRearCameraSize = item.phone_details.mainCamera.slice(0, 2)


            return item.phone_details.external.includes('microSD') && item.storage >= 64 && getSelfieCamera >= 13 && getRearCameraCount >= 3 && getRearCameraSize >= 16
        }
        if (selectedItem === 'Best Performance') {
            const chipSet = item.phone_details.chipset.includes('Snapdragon')
            return chipSet && item.phone_price < 20000 && item.ram > 4 && item.storage >= 128 && item.display_amoled === true && item.speciality.filter((item) => item.includes('1080p display'))


        }
        if (selectedItem === null || 'All products') {
            return item
        }

    })



    console.log(filterData)


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6">
                    <HeaderTitle title={'ALL Products'} />

                </div>
                <div className="col-6">
                    <div className="d-flex align-items-end flex-column">
                        <form onChange={handleChange}>
                            <label className='dropdown-label ' htmlFor="cars">Sort by:</label>
                            <select name="cars" id="cars" className='dropdown-product'>
                                <option value="All products">All products</option>
                                <option value="Best value">Best value</option>
                                <option value="Best Performance">Best Performance</option>
                                <option value="Best Camera">Best Camera</option>
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
                dataLength={selectedItem === null ? data2.length : filterData.length}
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
                    filterData.map((item, index) => {
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