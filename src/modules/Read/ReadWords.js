"use strict";
exports.__esModule = true;
exports.ReadWords = void 0;
var ReadWords = /** @class */ (function () {
    function ReadWords(input) {
        this.input = input;
    }
    ReadWords.prototype.readWords = function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve([_this.input]);
        });
    };
    return ReadWords;
}());
exports.ReadWords = ReadWords;
