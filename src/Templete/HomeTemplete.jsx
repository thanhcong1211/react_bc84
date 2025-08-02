import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from './HeaderHome'

//Template chứa các thành phần dùng chung của website

const HomeTemplate = () => {
    return (
        <div>
            <HeaderHome />
            <Outlet />




        </div>
    )
}

export default HomeTemplate