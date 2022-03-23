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
var Employees = /** @class */ (function () {
    function Employees() {
    }
    Employees.prototype.write = function () {
        console.log("this is write method");
    };
    return Employees;
}());
var Employees1 = /** @class */ (function (_super) {
    __extends(Employees1, _super);
    function Employees1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employees1.prototype.pratice = function () {
        console.log("Employee1 is implemented.");
    };
    return Employees1;
}(Employees));
var Employees2 = /** @class */ (function (_super) {
    __extends(Employees2, _super);
    function Employees2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employees2.prototype.pratice = function () {
        console.log("Employee2 is implemnted.");
    };
    return Employees2;
}(Employees));
var emp1 = new Employees1();
emp1.pratice();
emp1.write();
var sai1 = new Employees2();
sai1.pratice();
sai1.write();
