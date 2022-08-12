import React from 'react'

export default function Badge({ title, ...rest }) {

    const color = [
        title === 'Best Camera' ? '#874C72' : '',
        title === 'Best Performance' ? '#11A0DB' : '',
        title === 'Best Value' ? '#DD9E10' : '',
    ]
    const colors = () => {
        if (title === 'Best Camera') {
            return '#874C72'
        } else if (title === 'Best Performance') {
            return '#11A0DB'
        } else if (title === 'Best Value') {
            return '#DD9E10'
        }
    }

    const background = () => {
        if (title === 'Best Camera') {
            return 'rgba(135, 76, 114, 0.1)'
        } else if (title === 'Best Performance') {
            return 'rgba(17, 160, 219, 0.1) '
        } else if (title === 'Best Value') {
            return 'rgba(221, 158, 16, 0.1) '
        }
    }

    return (
        <span className="badge p-2 " style={{
            // backgroundColor: '#DD9E10',
            background: background(),
            border: `0.5px solid ${colors()}`,
            borderRadius: '2px',
            fontSize: '12px',
            color: colors(),
            fontWeight: 500,
            // padding: '2px 10px'

        }}
            {...rest}
        >
            {title}
        </span>
    )
}
