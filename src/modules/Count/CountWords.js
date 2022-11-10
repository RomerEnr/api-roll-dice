"use strict";
exports.__esModule = true;
exports.CountWords = void 0;
var CountWords = /** @class */ (function () {
    function CountWords(input) {
        this.input = input;
    }
    CountWords.prototype.count = function () {
        return this.input.length;
    };
    return CountWords;
}());
exports.CountWords = CountWords;
