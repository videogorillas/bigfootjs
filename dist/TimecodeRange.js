"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiffRange_1 = require("./DiffRange");
const Range_1 = require("./Range");
class TimecodeDiffRange {
    constructor(r1, r2, matchType) {
        this.r1 = r1;
        this.r2 = r2;
        this.matchType = matchType;
    }
    static toTimecode(range, tc1, tc2) {
        let tcr1 = null;
        let tcr2 = null;
        let { r1, r2, movedTo, matchType } = range;
        switch (matchType) {
            case DiffRange_1.MatchType.MOVED_TO:
                r1 = movedTo;
                break;
            case DiffRange_1.MatchType.MOVED_FROM:
                r2 = movedTo;
                break;
        }
        if (r1.length) {
            tcr1 = Range_1.getTimecodeRange(r1, tc1);
        }
        if (r2.length) {
            tcr2 = Range_1.getTimecodeRange(r2, tc2);
        }
        return new TimecodeDiffRange(tcr1, tcr2, matchType);
    }
}
exports.TimecodeDiffRange = TimecodeDiffRange;
//# sourceMappingURL=TimecodeRange.js.map