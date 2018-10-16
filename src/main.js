import React from "react";
import { MapView } from "../lib";

export default () => <MapView style={style.mapView} />;

const style = {
  mapView: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  }
};
