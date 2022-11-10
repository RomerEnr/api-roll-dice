"use strict";
exports.__esModule = true;
exports.WriteWords = void 0;
var WriteWords = /** @class */ (function () {
    function WriteWords(words) {
        this.words = words;
    }
    WriteWords.prototype.writeWords = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log(_this.words);
            resolve();
        });
    };
    return WriteWords;
}());
exports.WriteWords = WriteWords;
