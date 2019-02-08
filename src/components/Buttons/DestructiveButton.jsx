import React from 'react'
import Button from './Button'

const DestructiveButton = ({
    children,
    ...props,
}) => (
    <Button {...props} className="button-destructive">
        {children}
    </Button>
)

export default DestructiveButton