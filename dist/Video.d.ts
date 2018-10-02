import TapeTimecode from "./TapeTimecode";
export interface IVideo {
    id: string;
    filename: string;
    chunksUploaded: number;
    uploadedChunks: number[];
    chunksTotal: number;
    framesTotal: number;
    timescale: number;
    frameDuration: number;
    startTimecode: number;
    timecodeRate: number;
    isDropFrame: boolean;
    needsFPSChange: boolean;
    uiVideoUrl: string;
    isIndexed: boolean;
    width: number;
    height: number;
    reel: string;
    clipName: string;
}
export declare class Video implements IVideo {
    chunksTotal: number;
    chunksUploaded: number;
    clipName: string;
    filename: string;
    frameDuration: number;
    framesTotal: number;
    height: number;
    id: string;
    isDropFrame: boolean;
    isIndexed: boolean;
    needsFPSChange: boolean;
    reel: string;
    startTimecode: number;
    timecodeRate: number;
    timescale: number;
    uiVideoUrl: string;
    uploadedChunks: number[];
    width: number;
    getTimecode(): TapeTimecode;
}
