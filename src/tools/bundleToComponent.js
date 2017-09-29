import React, { Component } from "react";
import ArenaScene from "../hocs/ArenaScene";

export default function(bundle, hocProps) {
  let WrapperClass = class extends Component {
    static displayName = "ScenePropsProxy";
    render() {
      return (
        <ArenaScene
          sceneBundle={bundle}
          sceneProps={this.props}
          {...hocProps}
        />
      );
    }
  };
  return WrapperClass;
}