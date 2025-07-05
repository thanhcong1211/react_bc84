import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardProduct from './componets/CardProduct'
import HeaderReact from './componets/HeaderReact'
import BT1_HomeComponent from './componets/BT-HomeComponets'
import "./css/index.css"
import DataBinding from './DataBinding/DataBinding'
import HandleEvent from './HandleEvent/HandleEvent'

createRoot(document.getElementById('root')).render(
  <>
    {/* <BT1_HomeComponent /> */}
    {/* <DataBinding /> */}
    <HandleEvent />
    
  </> 
)
