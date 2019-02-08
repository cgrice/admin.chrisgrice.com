import React from 'react'
import classNames from 'classnames'

const Button = ({
    className,
    small,
    children,
    onClick,
}) => (
    <button 
        className={classNames(
            'button',
            className,
            {
                'button-small': small,
            },
        )}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button