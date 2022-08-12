import React from 'react'

export default function Loader() {
    return (

        <div
            className='d-flex justify-content-center align-items-center overflow-hidden'
        // style={{
        //     overflow: 'hidden',
        // }}
        >
            <div style={{
                display: 'flex',
                color: '#0095A0',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '15px',
            }} className="spinner-border  " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}
