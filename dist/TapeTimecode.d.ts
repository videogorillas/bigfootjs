declare class TapeTimecode {
    private dropFrame;
    private startTimecode;
    private tapeFps;
    constructor(dropFrame: boolean, startTimecode: number, fps: number);
    private static timecodeToString;
    getTimecodeAtFrame(frame: number): string;
}
export default TapeTimecode;
