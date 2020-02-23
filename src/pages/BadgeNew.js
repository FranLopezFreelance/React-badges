import React from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import heroLogo from '../images/logo.svg'
import './css/BadgeNew.css'

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img
            className="img-fluid"
            src={heroLogo}
            width="80px"
            alt="Hero-Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Fran"
                lastName="López"
                avatar="https://pbs.twimg.com/profile_images/830113838846590976/qReCjP49_400x400.jpg"
                position="Full Stack Developer"
                twitter="fjlFreelance"
                hash="#StatesMagement"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
