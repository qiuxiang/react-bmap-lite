import * as React from "react";
import Marker from "./marker";
import Overlay from "./overlay";

export const Context = React.createContext(null);

export type Props = {
  style?: React.CSSProperties;
  center: BMap.Point;
  zoom: number;
  draggingDisabled?: boolean;
  inertialDraggingDisabled?: boolean;
};

export default class BMapLite extends React.PureComponent<Props> {
  static Marker = Marker;
  static Overlay = Overlay;

  ref: HTMLDivElement;
  map: BMap.Map;
  state = { map: null }; // 在这里，state.map 只是用于触发重渲染

  componentDidMount() {
    this.map = new BMap.Map(this.ref);
    this.map.centerAndZoom(this.props.center, this.props.zoom);
    this.setState({ map: this.map });
    this.componentWillReceiveProps(this.props, true);
  }

  componentWillReceiveProps(props, force = false) {
    if (props.center !== this.props.center) {
      this.map.setCenter(props.center);
    }

    if (props.zoom !== this.props.zoom) {
      this.map.setZoom(props.zoom);
    }

    if (props.draggingDisabled !== this.props.draggingDisabled || force) {
      if (props.draggingDisabled) {
        this.map.disableDragging();
      } else {
        this.map.enableDragging();
      }
    }

    if (
      props.inertialDraggingDisabled !== this.props.inertialDraggingDisabled ||
      force
    ) {
      if (props.inertialDraggingDisabled) {
        this.map.disableInertialDragging();
      } else {
        this.map.enableInertialDragging();
      }
    }
  }

  render() {
    return (
      <Context.Provider value={this.state.map}>
        <div ref={ref => (this.ref = ref)} style={this.props.style}>
          {this.props.children}
        </div>
      </Context.Provider>
    );
  }
}
