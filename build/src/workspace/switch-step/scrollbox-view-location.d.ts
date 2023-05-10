export declare class ScrollBoxViewLocation {
    private readonly root;
    private readonly viewport;
    static create(parent: SVGGElement, viewport: SVGElement): ScrollBoxViewLocation;
    private readonly onResizeHandler;
    private readonly onTouchMoveHandler;
    private readonly onMouseMoveHandler;
    private readonly onTouchEndHandler;
    private readonly onMouseUpHandler;
    private content?;
    private scroll?;
    constructor(root: SVGGElement, viewport: SVGElement);
    setContent(element: SVGGElement): void;
    refresh(): void;
    destroy(): void;
    private reload;
    private onResize;
    private onWheel;
    private startScroll;
    private moveScroll;
    private stopScroll;
    private getScrollTop;
    private setScrollTop;
    private onTouchStart;
    private onMouseDown;
    private onTouchMove;
    private onMouseMove;
    private onTouchEnd;
    private onMouseUp;
}
