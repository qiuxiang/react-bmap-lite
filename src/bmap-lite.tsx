import * as React from "react";

export type Props = {
  center: BMap.Point;
  zoom: BMap.ZoomType;
} & React.HTMLProps<HTMLDivElement>;

export default class BMapLite extends React.PureComponent<Props> {
  $map: HTMLElement;
  map: BMap.Map;

  componentDidMount() {
    this.map = new BMap.Map(this.$map);
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
    return <div ref={ref => (this.$map = ref)} {...this.props} />;
  }
}
