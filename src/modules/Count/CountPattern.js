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
exports.CountPattern = void 0;
var CountWords_1 = require("./CountWords");
var CountPattern = /** @class */ (function (_super) {
    __extends(CountPattern, _super);
    function CountPattern(input, pattern) {
        var _this = _super.call(this, input) || this;
        _this.pattern = pattern;
        return _this;
    }
    CountPattern.prototype.count = function () {
        var joinedInput = _super.prototype.input.join("");
        var pattern = new RegExp(this.pattern, "g");
        var matches = joinedInput.match(pattern);
        return (matches || []).length;
    };
    return CountPattern;
}(CountWords_1.CountWords));
exports.CountPattern = CountPattern;
