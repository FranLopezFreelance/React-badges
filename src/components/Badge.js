import React, { Fragment } from 'react'
import './styles/Badge.css'
import logo from '../images/logo.svg'

class Badge extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="Badge">
          <div className="Badge__header">
            <img src={logo} alt="Logo" width="50px" />
          </div>
          <div className="Badge__section-name">
            <img
              className="Badge__avatar"
              src={this.props.avatar}
              alt="Avatar"
            />
            <h1>
              {this.props.firstName}
              <br />
              {this.props.lastName}
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>{this.props.position}</h3>
            <div>@{this.props.twitter}</div>
          </div>
          <div className="Badge__footer">{this.props.hash}</div>
        </div>
      </Fragment>
    )
  }
}

export default Badge
