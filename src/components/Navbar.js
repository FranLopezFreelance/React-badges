import React from 'react'
import './styles/Navbar.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/badges">
            <img
              className="Navbar__brand-logo"
              src={logo}
              alt="Logo"
              width="50px"
            />
            <span className="font-weight-light">React </span>
            <span className="font-weight-bold"> Badges</span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
