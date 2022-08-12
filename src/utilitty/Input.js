import React from 'react'

export default function Input({ label, type, placeholder, onChange, ...rest }) {
    return (
        <div className="mb-3">
            <label htmlFor={label} className="form-label"
                style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    color: '#74777B',
                }}
            >{label}</label>
            <input type={type} className="form-control" id={label} aria-describedby={label}
                placeholder={placeholder}
                onChange={onChange}

            />

        </div>

    )
}
