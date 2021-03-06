import React, { Component } from "react";
import darkStar from "./dark-star.svg";
import goldStar from "./gold-star.svg";
import api from "../../../../api/api";
import { connect } from "react-redux";

class MuseumBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false
    };
    this.giveStar = this.giveStar.bind(this);
  }
  giveStar() {
    this.setState({
      star: !this.state.star
    });
  }
  render() {
    let starType;
    this.state.star ? (starType = goldStar) : (starType = darkStar);
    return (
      <div className="column is-narrow">
        <div className="box">
          <div className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.logoURL} alt="X" />
              </figure>
            </div>
            <div className="media-content content">
              <p className="title is-4 is-spaced is-marginless">
                {this.props.shortName}
              </p>
              <p className="subtitle is-5 is-marginless">
                {this.props.completeName}
              </p>
              <p className="is-6">
                {this.props.city}, {this.props.street}
              </p>
              <p className="subtitle is-5">{this.props.country}</p>
            </div>
            <div className="media-right" onClick={this.giveStar}>
              <figure className="image is-24x24">
                <img src={starType} alt="No star" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userData
});
export default connect(mapStateToProps)(MuseumBox);
