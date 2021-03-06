import React, { Component } from "react";
import { connect } from "react-redux";
import MuseumDisplay from "./museum-view/museum-view";
import ArtifactDisplay from "./artifact-view/artifact-view";
import MonumentDisplay from "./monument-view/monument-view";

class Content extends Component {
  render() {
    let display;

    if (this.props.view === "museum") {
      display = <MuseumDisplay />;
    } else if (this.props.view === "artifact") {
      display = <ArtifactDisplay />;
    } else if (this.props.view === "monument") {
      display = <MonumentDisplay />;
    }

    return <div className="section">{display}</div>;
  }
}

const mapStateToProps = state => ({
  view: state.header.activeView
});

export default connect(mapStateToProps)(Content);
