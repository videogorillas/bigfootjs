import { DiffRange, MatchType } from "./DiffRange";
import TapeTimecode from "./TapeTimecode";
export interface TimecodeRange {
    start: string;
    end: string;
}
export declare class TimecodeDiffRange {
    r1: TimecodeRange;
    r2: TimecodeRange;
    matchType: MatchType;
    constructor(r1: TimecodeRange, r2: TimecodeRange, matchType: MatchType);
    static toTimecode(range: DiffRange, tc1: TapeTimecode, tc2: TapeTimecode): TimecodeDiffRange;
}
