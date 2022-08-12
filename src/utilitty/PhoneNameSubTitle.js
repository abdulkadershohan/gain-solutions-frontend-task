import React from 'react'

export default function PhoneNameSubTitle({ title }) {
    return (
        <p
            style={{
                fontSize: '16px',
                color: '#575757',
                //  lineHeight: '24px',
                fontWeight: 500,
            }}
        >
            {title}
        </p>
    )
}
