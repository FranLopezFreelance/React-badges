import React from 'react'
import BadgeItem from './BadgeItem'

export class BadgesList extends React.Component {
  render() {
    return (
      <div className="Badges__list">
        <div className="Badges__container">
          {this.props.badges.map(badge => {
            return <BadgeItem key={badge.id} badge={badge} />
          })}
        </div>
      </div>
    )
  }
}

export default BadgesList
