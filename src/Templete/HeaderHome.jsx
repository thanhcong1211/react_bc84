import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {

    //bs5-navbar-background
  return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "bg-white text-dark nav-link": "nav-link"} to="/" aria-current="page"  style={({isActive})=> isActive ? {border:'1px solid orange'}:{}} >Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
        className={({isActive})=> isActive ? "bg-white text-dark nav-link": "nav-link"} 
        style={({isActive})=> isActive ? {border:'1px solid orange'}: {}} 
        to="/login" >Login</NavLink>
      </li>
       <li className="nav-item">
        <NavLink 
        className={({isActive})=> isActive ? "bg-white text-dark nav-link": "nav-link"} 
        style={({isActive})=> isActive ? {border:'1px solid orange'}: {}} 
        to="/antd" >antd</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className={({isActive})=> isActive ? "bg-white text-dark nav-link": "nav-link"} to="/register" 
        style={({isActive})=> isActive ? {border:'1px solid orange'}: {}}     
        >register</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ReactRouterDom</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="/react-router-dom/demo-use-navigate">Demo use navigate</NavLink>
          <NavLink className="dropdown-item" to="/react-router-dom/use-search-param">Demo use search param</NavLink>
        </div>
      </li>
            <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="/react-router-dom/redux-change-number">Demo change number</NavLink> 
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

   
  )
}

export default HeaderHome