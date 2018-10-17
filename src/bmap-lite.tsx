import * as React from "react";

export type Props = {} & React.HTMLProps<HTMLDivElement>;

export default class BMapLite extends React.PureComponent<Props> {
  $map: HTMLElement;
  map: BMap.Map;

  componentDidMount() {
    this.map = new BMap.Map(this.$map);
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 7);
    console.log(this.props);
  }

  componentDidUpdate(props) {
    console.log(props);
  }

  render() {
    return <div ref={ref => (this.$map = ref)} {...this.props} />;
  }
}
