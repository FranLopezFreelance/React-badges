import React from 'react'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import heroLogo from '../images/logo.svg'
import './css/BadgeNew.css'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      position: '',
      twtter: '',
    },
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }
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
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatar="https://pbs.twimg.com/profile_images/830113838846590976/qReCjP49_400x400.jpg"
                position={this.state.form.position}
                twitter={this.state.form.twitter}
                hash="#StatesMagement"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew
