import * as React from "react";
import { Context } from "./";

export type Props = {
  position: BMap.Point;
  onClick?: () => void;
};

export default class Marker extends React.PureComponent<Props> {
  map: BMap.Map;
  marker: BMap.Marker;

  componentWillReceiveProps(props) {
    if (props.position !== this.props.position) {
      this.marker.setPosition(props.position);
    }

    if (props.onClick !== this.props.onClick) {
      this.marker.removeEventListener("click", this.props.onClick);
      this.marker.addEventListener("click", props.onClick);
    }
  }

  init(map) {
    if (!map || this.map) {
      return;
    }

    this.map = map;
    this.marker = new BMap.Marker(this.props.position);
    this.marker.addEventListener("click", this.props.onClick);
    map.addOverlay(this.marker);
  }

  render() {
    return (
      <Context.Consumer>
        {map => {
          this.init(map);
          return null;
        }}
      </Context.Consumer>
    );
  }
}
