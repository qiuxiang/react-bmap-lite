import * as React from "react";
import Marker from "./marker";

export const Context = React.createContext(null);

export type Props = {
  center: BMap.Point;
  zoom: BMap.ZoomType;
} & React.HTMLProps<HTMLDivElement>;

export default class BMapLite extends React.PureComponent<Props> {
  static Marker = Marker;
  state = { map: null }; // 在这里，state.map 只是用于触发重渲染
  map: BMap.Map;
  $map: HTMLElement;

  componentDidMount() {
    this.map = new BMap.Map(this.$map);
    this.setState({ map: this.map });
    this.map.centerAndZoom(this.props.center, this.props.zoom);
  }

  componentWillReceiveProps(props) {
    if (props.center !== this.props.center) {
      this.map.setCenter(props.center);
    }

    if (props.zoom !== this.props.zoom) {
      this.map.setZoom(props.zoom);
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
