import React from 'react'

export default function HeaderTitle({ title, ...rest }) {
    return (
        <h1 style={{
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '36px',
            color: '#575757',
            paddingTop: '20px',
            paddingBottom: '20px',
            ...rest


        }}>
            {title}
        </h1>
    )
}
