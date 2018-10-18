import * as React from "react";
import { Context } from "./";

export type Props = {
  position: BMap.Point;
} & React.HTMLProps<HTMLDivElement>;

class Overlay extends BMap.Overlay {
  map: BMap.Map;
  position: BMap.Point;
  element: HTMLElement;

  constructor(position, element) {
    super();
    this.position = position;
    this.element = element;
    element.style.position = "absolute";
  }

  initialize(map: BMap.Map) {
    this.map = map;
    map.getPanes().markerPane.appendChild(this.element);
    return this.element;
  }

  draw() {
    const pixel = this.map.pointToOverlayPixel(this.position);
    this.element.style.left = pixel.x + "px";
    this.element.style.top = pixel.y + "px";
  }
}

export default class Marker extends React.PureComponent<Props> {
  map: BMap.Map;
  overlay: Overlay;
  element: HTMLElement;

  componentWillReceiveProps(props) {
    if (props.position !== this.props.position) {
      this.overlay.position = props.position;
      this.overlay.draw();
    }
  }

  init(map) {
    if (!map || this.map) {
      return;
    }

    this.map = map;
    this.overlay = new Overlay(this.props.position, this.element);
    map.addOverlay(this.overlay);
  }

  render() {
    return (
      <Context.Consumer>
        {map => {
          this.init(map);
          return <div ref={ref => (this.element = ref)} {...this.props} />;
        }}
      </Context.Consumer>
    );
  }
}
