import * as React from "react";
import Marker from "./marker";
import Overlay from "./overlay";

export const Context = React.createContext(null);

export type Props = {
  center: BMap.Point;
  zoom: BMap.ZoomType;
  draggingDisabled?: boolean;
  inertialDraggingDisabled?: boolean;
} & React.HTMLProps<HTMLDivElement>;

export default class BMapLite extends React.PureComponent<Props> {
  static Marker = Marker;
  static Overlay = Overlay;
  state = { map: null }; // 在这里，state.map 只是用于触发重渲染
  map: BMap.Map;
  $map: HTMLDivElement;

  componentDidMount() {
    this.map = new BMap.Map(this.$map);
    this.setState({ map: this.map });
    this.map.centerAndZoom(this.props.center, this.props.zoom);
    this.componentWillReceiveProps(this.props, true);
  }

  componentWillReceiveProps(props, focus = false) {
    if (props.center !== this.props.center) {
      this.map.setCenter(props.center);
    }

    if (props.zoom !== this.props.zoom) {
      this.map.setZoom(props.zoom);
    }

    if (props.draggingDisabled !== this.props.draggingDisabled || focus) {
      if (props.draggingDisabled) {
        this.map.disableDragging();
      } else {
        this.map.enableDragging();
      }
    }

    if (
      props.inertialDraggingDisabled !== this.props.inertialDraggingDisabled ||
      focus
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
        <div ref={ref => (this.$map = ref)} {...this.props} />
      </Context.Provider>
    );
  }
}
