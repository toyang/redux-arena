import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Router } from "react-router-dom";
import PublicScene from "../src/PublicScene";
import SceneSwitch from "../src/SceneSwitch";
import pageABundle from "./pageABundle";
import * as actions from "./actions";

const asyncPageB = import("./pageBBundle");
class Frame extends Component {
  componentWillMount() {
    this.state = 0;
  }
  render() {
    return (
      <Router history={this.props.history}>
        <div>
          <button onClick={() => this.props.history.push("/pageA")}>
            PageA
          </button>
          <button onClick={() => this.props.history.push("/asyncPageB")}>
            asyncPageB
          </button>
          <button onClick={() => this.setState(this.state+1)}>
            asyncPageB
          </button>
          <div style={{ marginTop: "1rem" }}>
            <SceneSwitch>
              <PublicScene path="/pageA" sceneBundle={pageABundle} />
              <PublicScene path="/asyncPageB" asyncSceneBundle={asyncPageB} />
            </SceneSwitch>
          </div>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
  return {
    history: state.arena.history
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
