"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WriteWordsFile = void 0;
var WriteWords_1 = require("./WriteWords");
var fs_1 = require("fs");
var WriteWordsFile = /** @class */ (function (_super) {
    __extends(WriteWordsFile, _super);
    function WriteWordsFile(words, filePath, joinMethod) {
        if (joinMethod === void 0) { joinMethod = "\n"; }
        var _this = _super.call(this, words) || this;
        _this.filePath = filePath;
        _this.joinMethod = joinMethod;
        return _this;
    }
    WriteWordsFile.prototype.writeWords = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs_1["default"].writeFile(_this.filePath, _super.prototype.words.join(_this.joinMethod), function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    };
    return WriteWordsFile;
}(WriteWords_1.WriteWords));
exports.WriteWordsFile = WriteWordsFile;
