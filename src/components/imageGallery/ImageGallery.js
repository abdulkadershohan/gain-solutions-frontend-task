import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ImageGallery() {
    const location = useLocation()

    return (
        <div className='container'>
            <div className='row'>
                {
                    location.state.item.map((item, index) => {
                        return (
                            <div className='col-4 py-4 ' key={Math.random()}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: 400,
                                    }}
                                    src={item} alt='phone-img' className='img-fluid' />
                            </div>

                        )
                    })
                }
            </div>


        </div>
    )
}
