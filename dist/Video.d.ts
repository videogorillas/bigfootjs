export interface Video {
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
