import * as React from "react";
import BMapLite from "../../dist";

export default () => <BMapLite style={mapStyle} />;

const mapStyle = {
  width: "100%",
  height: "100%",
  position: "absolute" as "absolute",
  top: 0,
  left: 0
};
