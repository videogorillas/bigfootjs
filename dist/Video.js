"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TapeTimecode_1 = require("./TapeTimecode");
class Video {
    getTimecode() {
        return new TapeTimecode_1.default(this.isDropFrame, this.startTimecode, this.timecodeRate);
    }
}
exports.Video = Video;
//# sourceMappingURL=Video.js.map