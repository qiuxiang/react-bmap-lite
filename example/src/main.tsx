import * as React from "react";
import BMapLite from "../../src";

const { Marker, Overlay } = BMapLite;

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
        style={style.map}
        center={this.state.center}
        zoom={this.state.zoom}
      >
        <Marker position={this.state.center} onClick={() => alert("Marker")} />
        <Overlay position={this.state.center}>
          <div style={style.overlay} onTouchStart={() => alert("Overlay")}>
            Zoom {this.state.zoom}
          </div>
        </Overlay>
      </BMapLite>
    );
  }
}

const style = {
  map: {
    width: "100%",
    height: "100%",
    position: "absolute" as "absolute",
    top: 0,
    left: 0
  },
  overlay: {
    background: "#e67e22",
    color: "#fff",
    boxShadow: "1px 1px 4px rgba(0,0,0,0.2)",
    padding: 4,
    borderRadius: 4,
    position: "relative" as "relative",
    whiteSpace: "nowrap" as "nowrap",
    textAlign: "center" as "center",
    width: 80,
    top: -56,
    left: -40
  }
};
