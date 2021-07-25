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
var Test = /** @class */ (function () {
    function Test(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    Test.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Test.prototype.setUnchangeableName = function () {
        //not possible
        //this.unchangableName="foo"
    };
    Test.maxAge = 50;
    return Test;
}());
var TestAdmin = /** @class */ (function (_super) {
    __extends(TestAdmin, _super);
    function TestAdmin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestAdmin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    TestAdmin.prototype.getEditor = function () {
        return this.editor;
    };
    return TestAdmin;
}(Test));
var test = new Test("Sahil", "khurana");
console.log(test.getFullName);
console.log(Test.maxAge);
var testAdmin = new TestAdmin("Test", "Admin");
testAdmin.setEditor("editor");
console.log(testAdmin.getEditor);
