import React from "react";

export default class MapView extends React.PureComponent {
  componentDidMount() {
    this.map = new BMap.Map(this.$map);
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 7);
  }

  render() {
    return <div ref={ref => (this.$map = ref)} {...this.props} />;
  }
}
