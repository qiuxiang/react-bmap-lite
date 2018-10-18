import * as React from "react";
import BMapLite from "../../src";

const { Marker } = BMapLite;

export default class Main extends React.PureComponent {
  state = {
    center: new BMap.Point(116.404, 39.915),
    zoom: 7
  };

  componentDidMount() {
    setTimeout(() => this.setState({ zoom: 16 }), 2000);
  }

  render() {
    return (
      <BMapLite
        style={mapStyle}
        center={this.state.center}
        zoom={this.state.zoom}
      >
        <Marker position={this.state.center} onClick={() => alert(3)} />
      </BMapLite>
    );
  }
}

const mapStyle = {
  width: "100%",
  height: "100%",
  position: "absolute" as "absolute",
  top: 0,
  left: 0
};
