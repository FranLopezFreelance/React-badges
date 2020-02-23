import React from 'react';
import "./styles/Badge.css";
import logo from '../images/logo.svg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={logo} alt="Logo" width="80px" />
                </div>
                <div className="Badge__section-name">
                    <img className="Badge__avatar" src={this.props.avatar} alt="Avatar" />
                    <h1>{this.props.name}<br />{this.props.lastname}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.position}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    {this.props.hash}
                </div>
            </div>
        )
    }
}

export default Badge;