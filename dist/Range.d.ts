export interface IRange {
    frame: number;
    length: number;
}
export declare class Range implements IRange {
    frame: number;
    length: number;
    constructor(frame: number, length: number);
    static fromIRange({ frame, length }: IRange): Range;
}
export declare function containsFrame(range: IRange, frameNumber: number): boolean;
