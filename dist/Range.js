"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimecodeRange = exports.containsFrame = exports.Range = void 0;
class Range {
    constructor(frame, length) {
        this.frame = frame;
        this.length = length;
    }
    static fromIRange({ frame, length }) {
        return new Range(frame, length);
    }
}
exports.Range = Range;
function containsFrame(range, frameNumber) {
    return this.length != 0 && (frameNumber >= range.frame && frameNumber + 1 <= range.frame + range.length);
}
exports.containsFrame = containsFrame;
function getTimecodeRange(range, timecode) {
    if (range.length) {
        let startFrame = range.frame;
        let endFrame = range.frame + range.length - 1;
        return { start: timecode.getTimecodeAtFrame(startFrame), end: timecode.getTimecodeAtFrame(endFrame) };
    }
    return null;
}
exports.getTimecodeRange = getTimecodeRange;
//# sourceMappingURL=Range.js.map