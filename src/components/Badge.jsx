import React from 'react'
import classNames from 'classnames'

const Badge = ({
    className,
    children,
}) => (
    <div className={classNames(
        "badge",
        className,
    )}>
        {children}
    </div>
)

export default Badge