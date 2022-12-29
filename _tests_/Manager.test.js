const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number with constructor", () => {
    const testNumber = 10;
    const e = new Manager("John", 5, "blah@blah.com", testNumber);
    expect(e.officeNumber).toBe(testNumber);
});

test("getRole method returns string Manager", () => {
    const testRole = "Manager";
    const e = new Manager("James", 5, "blah@blah.com", 11);
    expect(e.getRole()).toBe(testRole);
});

test("Can get office number with getOffice method", () => {
    const testNumber = 10;
    const e = new Manager("Jane", 3, "blah@blah.com", testNumber);
    expect(e.getOfficeNumber()).toBe(testNumber);
});