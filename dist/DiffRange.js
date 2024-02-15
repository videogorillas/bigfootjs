"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchTypeColors = exports.MatchType = void 0;
var MatchType;
(function (MatchType) {
    MatchType["ADDED"] = "ADDED";
    MatchType["REMOVED"] = "REMOVED";
    MatchType["MATCH"] = "MATCH";
    MatchType["CHANGED"] = "CHANGED";
    MatchType["MOVED"] = "MOVED";
    MatchType["MOVED_FROM"] = "MOVED_FROM";
    MatchType["MOVED_TO"] = "MOVED_TO";
})(MatchType || (exports.MatchType = MatchType = {}));
var MatchTypeColors;
(function (MatchTypeColors) {
    MatchTypeColors["ADDED"] = "darkcyan";
    MatchTypeColors["REMOVED"] = "red";
    MatchTypeColors["MATCH"] = "darkblue";
    MatchTypeColors["CHANGED"] = "darkgreen";
    MatchTypeColors["MOVED"] = "orange";
    MatchTypeColors["MOVED_FROM"] = "fuchsia";
    MatchTypeColors["MOVED_TO"] = "mediumseagreen";
})(MatchTypeColors || (exports.MatchTypeColors = MatchTypeColors = {}));
//# sourceMappingURL=DiffRange.js.map