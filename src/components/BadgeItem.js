import React from 'react'
import twitterIcon from '../images/twitter.svg'
import './styles/BadgeItem.css'

class BadgeItem extends React.Component {
  render() {
    return (
      <div className="row Badge__item">
        <div className="col-sm-2">
          <img src={this.props.badge.avatarUrl} alt="Avatar URL" />
        </div>
        <div className="col-sm-10">
          <p className="font-weight-bold Badge__data name">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p className="twitter Badge__data">
            <img src={twitterIcon} width="30px" alt="Titter Icon" /> @
            {this.props.badge.twitter}
          </p>
          <p className="Badge__data jobTitle">{this.props.badge.jobTitle}</p>
        </div>
      </div>
    )
  }
}

export default BadgeItem
