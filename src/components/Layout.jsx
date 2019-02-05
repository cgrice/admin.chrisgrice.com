import React from 'react'
import { Flex } from 'reflexbox'
import Header from './Header'

const Layout = ({
    children,
}) => (
    <div className="layout">
        <Header />
        <Flex>
            {children}
        </Flex>
    </div>
    
)

export default Layout
