import React from 'react'
import { Flex } from 'reflexbox'
import { DestructiveButton } from '../components/Buttons'
import auth from '../auth'

const Header = () => (
    <Flex className="header">
        <span className="header_title">admin.chrisgrice.com</span>
        <span><DestructiveButton onClick={() => auth.logout()}>log out</DestructiveButton></span>
    </Flex>
)

export default Header