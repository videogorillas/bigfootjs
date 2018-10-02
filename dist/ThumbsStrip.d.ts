import { DiffRange } from "./DiffRange";
import { IRange } from "./Range";
export interface Coordinates {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Strip extends Coordinates {
    frames: number;
}
export interface FrameStrip extends Strip {
    startFrame: number;
}
export declare type DrawHandler = (diffRange: DiffRange, frameNumber: number, src: Coordinates, dest: Coordinates) => void;
declare class ThumbsStrip {
    cols: number;
    rows: number;
    frameWidth: number;
    frameHeight: number;
    private destFrameSize;
    constructor(cols: number, rows: number, frameWidth: number, frameHeight: number);
    pageForFrame(frameNumber: number): number;
    setDestFrameSize(dest: {
        frameWidth: number;
        frameHeight: number;
    }): void;
    frameCoordinates(frameNumber: number): Coordinates;
    diffRangesTimeline(ranges: DiffRange[]): Map<DiffRange, IRange>;
    /**
     * Find Timeline entry by frame number
     * @param timeline
     * @param timelineFrame
     */
    entryByFrame(timeline: Map<DiffRange, IRange>, timelineFrame: number): [DiffRange, IRange];
    /**
     * source range frame numbers scaled to a canvas,
     * i.e. spread 42 frames from the source images to 10 frames space on the canvas
     * @param srcLength
     * @param dstLength
     */
    scaledToCanvas(srcLength: number, dstLength: number): number[];
    framesToCanvas(startFrame: number, length: number, dCols: number): Map<FrameStrip, Strip>[];
    /**
     * Calculates coordinates of ranges frames in source image and maps them to timeline canvas,
     * passes these coordinates along with source range and starting frame to a callback for further consuming
     * @param timeline
     * @param canvasFrameWidth
     * @param draw
     */
    timelineDrawer(timeline: Map<DiffRange, IRange>, canvasFrameWidth: number, draw: DrawHandler): void;
    drawRange(srcRange: IRange, dstRange: IRange, canvasFrameWidth: number, startY: number, draw: (frameNumber: number, src: Coordinates, dest: Coordinates) => void): void;
}
export default ThumbsStrip;
