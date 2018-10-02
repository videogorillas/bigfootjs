"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TapeTimecode {
    constructor(dropFrame, startTimecode, fps) {
        this.dropFrame = dropFrame;
        this.startTimecode = startTimecode;
        this.tapeFps = fps;
    }
    static timecodeToString(frameNumber, dropFrame, timecodeRate) {
        if (dropFrame) {
            const D = (frameNumber / 17982) | 0;
            const M = frameNumber % 17982;
            frameNumber += 18 * D + 2 * ((M - 2) / 1798 | 0);
        }
        const frames = frameNumber % timecodeRate;
        frameNumber = (frameNumber / timecodeRate) | 0;
        const seconds = frameNumber % 60;
        frameNumber = (frameNumber / 60) | 0;
        const minutes = frameNumber % 60;
        frameNumber = (frameNumber / 60) | 0;
        const hours = frameNumber % 24;
        let tcfmt = "";
        tcfmt += `${hours}`.padStart(2, '0') + ':';
        tcfmt += `${minutes}`.padStart(2, '0') + ':';
        tcfmt += `${seconds}`.padStart(2, '0');
        tcfmt += (dropFrame ? ';' : '.');
        tcfmt += `${frames}`.padStart(2, '0');
        return tcfmt;
    }
    getTimecodeAtFrame(frame) {
        return TapeTimecode.timecodeToString(this.startTimecode + frame, this.dropFrame, this.tapeFps);
    }
}
exports.default = TapeTimecode;
//# sourceMappingURL=TapeTimecode.js.map