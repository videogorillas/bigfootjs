"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=Range.js.map