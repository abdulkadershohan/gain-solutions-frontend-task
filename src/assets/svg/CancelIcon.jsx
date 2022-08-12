import * as React from "react"

const CancelIcon = (props) => (
    <svg
        width={15}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7.5 14.25a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5ZM9.375 6.125l-3.75 3.75M5.625 6.125l3.75 3.75"
            stroke="#fff"
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

export default CancelIcon
