import React from 'react'
import HeaderReact from './HeaderReact'
import Navigation from './Navigation'
import Content from './Content'
import FooterCom from './FooterCom'

const BT1_HomeComponent = () => {
  return (
    <div>
        <HeaderReact />
        <div className='row'>
            <div className='col-4 p-0 m-0'>
                <Navigation />
            </div>
            <div className='col-8 p-0 m-0'>
                <h3 className='rounded-sm inline-block bg-amber-300 w-[500px]'>Content</h3>
                <Content />
            </div>
        </div>
        <FooterCom />


    </div>
  )
}

export default BT1_HomeComponent