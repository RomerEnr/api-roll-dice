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
exports.ReadWordsFile = void 0;
var ReadWords_1 = require("./ReadWords");
var fs_1 = require("fs");
var ReadWordsFile = /** @class */ (function (_super) {
    __extends(ReadWordsFile, _super);
    function ReadWordsFile(filePath) {
        return _super.call(this, filePath) || this;
    }
    ReadWordsFile.prototype.readWords = function () {
        return new Promise(function (resolve, reject) {
            fs_1["default"].readFile(_super.prototype.input, function (err, data) {
                if (err) {
                    reject(err);
                }
                else {
                    var line = data.toString().split("\n");
                    var words = line.map(function (line) { return line.split(" "); }).flat();
                    resolve(words);
                }
            });
        });
    };
    return ReadWordsFile;
}(ReadWords_1.ReadWords));
exports.ReadWordsFile = ReadWordsFile;
