import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">{props.title}</Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="/" className="nav-item nav-a active">Home</Link>
                    <Link to="/about" className="nav-item nav-a">{props.aboutText}</Link>
                </div>
                <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
                </div>
            </div>
        </div>
    </nav>  )
}
Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps ={
    title :"first app",
    aboutText :"about us"
}
