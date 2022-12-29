const Employee = require("../lib/Employee");

test("Can start Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name with constructor", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);

});

test("Can set id with constructor", () => {
    const testId = 7;
    const e = new Employee("James", testId);
    expect(e.id).toBe(testId);
});

test("Can set email with constructor", () => {
    const testEmail = "blah@blah.com";
    const e = new Employee("Jacob", 5, testEmail);
    expect(e.email).toBe(testEmail);
});

test("Can get name with getName method", () => {
    const testName = "John";
    const e = new Employee(testName);
    expect(e.getName()).toBe(testName);
});

test("Can get id with getId method", () => {
    const testId = 7;
    const e = new Employee("Jacob", testId);
    expect(e.getId()).toBe(testId);
});

test("Can get email with getEmail method", () => {
    const testEmail = "blah@blah.com";
    const e = new Employee("James", 5, testEmail);
    expect(e.getEmail()).toBe(testEmail);
});

test("getRole method returns string Employee", () => {
    const testRole = "Employee";
    const e = new Employee("John", 7, "blah@blah.com");
    expect(e.getRole()).toBe(testRole);
});