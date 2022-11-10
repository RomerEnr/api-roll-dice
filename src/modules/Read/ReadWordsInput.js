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
exports.ReadWordsInput = void 0;
var ReadWords_1 = require("./ReadWords");
var ReadWordsInput = /** @class */ (function (_super) {
    __extends(ReadWordsInput, _super);
    function ReadWordsInput(input) {
        return _super.call(this, input) || this;
    }
    ReadWordsInput.prototype.readWords = function () {
        return new Promise(function (resolve) {
            var words = _super.prototype.input.split(" ");
            resolve(words);
        });
    };
    return ReadWordsInput;
}(ReadWords_1.ReadWords));
exports.ReadWordsInput = ReadWordsInput;
