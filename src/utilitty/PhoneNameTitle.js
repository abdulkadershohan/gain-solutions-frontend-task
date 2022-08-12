import React from 'react'

export default function PhoneNameTitle({ title }) {
    return (
        <p
            style={{
                fontSize: '18px',
                color: '#575757',
                lineHeight: '0px',
                fontWeight: 600,
            }}
        >
            {title}
        </p>
    )
}
