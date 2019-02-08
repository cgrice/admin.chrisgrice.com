import React from 'react'
import Button from './Button'

const PrimaryButton = ({
    children,
    ...props
}) => (
    <Button {...props} className="button-primary">
        {children}
    </Button>
)

export default PrimaryButton