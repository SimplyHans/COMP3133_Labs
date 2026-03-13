"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    // constructor(public eid: number, public fnm: string, public lnm: string, public city: string) {
    // }
    function Employee(eid, fnm, lnm, city) {
        this.eid = eid;
        this.fnm = fnm;
        this.lnm = lnm;
        this.city = city;
    }
    Employee.prototype.display = function () {
        console.log(this);
    };
    return Employee;
}());
exports.default = Employee;
