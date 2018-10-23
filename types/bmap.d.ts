declare namespace BMap {
  type ControlAnchor = number;

  class Map {
    constructor(container: string | HTMLElement, opts?: MapOptions);
    enableDragging();
    disableDragging();
    enableDoubleClickZoom();
    disableDoubleClickZoom();
    enableInertialDragging();
    disableInertialDragging();
    enablePinchToZoom();
    disablePinchToZoom();
    centerAndZoom(center: Point, zoom: number);
    reset();
    getBounds(): Bounds;
    getSize(): Size;
    getViewport(
      view: Point[] | Bounds,
      viewportOptions?: ViewportOptions
    ): Viewport;
    setViewport(
      view: Point[] | Bounds | Viewport,
      viewportOptions?: ViewportOptions
    );
    panTo(center: Point, opts: PanOptions);
    panBy(x: number, y: number, opts: PanOptions);
    getCenter(): Point;
    setCenter(center: Point);
    getZoom(): number;
    setZoom(zoom: number);
    zoomIn();
    zoomOut();
    addControl(control: Control);
    removeControl(control: Control);
    addOverlay(overlay: Overlay);
    removeOverlay(overlay: Overlay);
    clearOverlays();
    getOverlays(): Overlay[];
    addMassFeatures(arrMassFeatures: MassFeature[]);
    removeMassFeatures(arrMassFeatures: MassFeature[]);
    clearMassFeatures();
    pixelToPoint(pixel: Pixel): Point;
    pointToPixel(point: Point): Pixel;
    pointToOverlayPixel(point: Point): Pixel;
    overlayPixelToPoint(pixel: Pixel): Point;
    getZoomUnits(zoom?: number): number;
    getTileUnits(zoom?: number): number;
    addTileLayer(tileLayer: TileLayer);
    removeTileLayer(tileLayer: TileLayer);
    getPanes(): MapPanes;
    getContainer(): HTMLElement;
  }

  interface MapOptions {
    minZoom?: number;
    maxZoom?: number;
    enableDragging?: boolean;
    enableDblclickZoom?: boolean;
    enablePinchToZoom?: boolean;
    enableInertialDragging?: boolean;
    mapStyle?: MapStyle;
  }

  interface Viewport {
    center: Point;
    zoom: number;
  }

  interface ViewportOptions {
    enableAnimation?: boolean;
    margins?: number[];
  }

  interface PanOptions {
    noAnimation?: boolean;
  }

  interface MapStyle {
    style: string;
    styleJson: any;
  }

  class Bounds {
    constructor(sw: Point, ne: Point);
    equals(other: Bounds): boolean;
    extend(point: Point);
    getCenter(): Point;
    isEmpty(): boolean;
    getSouthWest(): Point;
    getNorthEast(): Point;
    toSpan(): Point;
  }

  class Pixel {
    constructor(x: number, y: number);
    x: number;
    y: number;
    equals(other: Pixel): boolean;
  }

  class Point {
    constructor(lng: number, lat: number);
    lng: number;
    lat: number;
    equals(other: Point): boolean;
  }

  class Size {
    constructor(width: number, height: number);
    width: number;
    height: number;
    equals(other: Size): boolean;
  }

  class Control {
    initialize(map: Map): HTMLElement;
    setAnchor(anchor: ControlAnchor);
  }

  class Overlay {
    initialize(map: Map): HTMLElement;
    isVisible(): boolean;
    draw();
    show();
    hide();
    remove();
  }

  class ScaleControl {
    constructor(opts?: ScaleControlOptions);
    initialize(): HTMLElement;
    setColor();
    getColor(): string;
  }

  interface ScaleControlOptions {
    anchor?: ControlAnchor;
    color?: string;
  }

  class ZoomControl {
    constructor(opts?: ZoomControlOptions);
    initialize(): HTMLElement;
  }

  interface ZoomControlOptions {
    anchor?: ControlAnchor;
  }

  class Marker {
    constructor(point: Point, opts?: MarkerOptions);
    setIcon(icon: Icon);
    getIcon(): Icon;
    setPosition(position: Point);
    getPosition(): Point;
    setOffset(offset: Size);
    getOffset(): Size;
    setTop(isTop: boolean);
    addEventListener(event: string, handler: Function);
    removeEventListener(event: string, handler: Function);
  }

  interface MarkerOptions {
    offset?: Size;
    icon?: Icon;
    enableMassClear?: boolean;
    clickable?: boolean;
    baseZIndex?: number;
    isTop?: boolean;
  }

  class Icon {
    constructor(url: String, size: Size, opts?: IconOptions);
    anchor: Size;
    size: Size;
    imageOffset: Size;
    backGroundImageSize: Size;
    imageUrl: string;
    setImageUrl(imageUrl: String);
    setSize(size: Size);
    setAnchor(anchor: Size);
    setImageOffset(offset: Size);
    getHTML(): string;
    setBackGroundImageSize();
    toString(): Icon;
  }

  interface IconOptions {
    anchor?: Size;
    imageOffset?: Size;
    backGroundImageSize?: Size;
  }

  class MassFeature {
    constructor(point: Point, opts?: MassFeatureOptions);
    getIcon(): Icon;
    getPosition(): Point;
    getData(): string;
  }

  interface MassFeatureOptions {
    data?: string;
    icon?: Icon;
    margin?: number;
  }

  class TileLayer {
    constructor(opts?: TileLayerOptions);
    getTilesUrl(tileCoord: Pixel, zoom: number): string;
    initialize();
    remove();
  }

  interface TileLayerOptions {
    baseLayer?: boolean;
    zIndex?: number;
  }

  interface MapPanes {
    floatPane: HTMLElement;
    markerMouseTarget: HTMLElement;
    floatShadow: HTMLElement;
    labelPane: HTMLElement;
    markerPane: HTMLElement;
    markerShadow: HTMLElement;
    mapPane: HTMLElement;
  }
}

declare const BMAP_ANCHOR_TOP_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_TOP_RIGHT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_LEFT: BMap.ControlAnchor;
declare const BMAP_ANCHOR_BOTTOM_RIGHT: BMap.ControlAnchor;
