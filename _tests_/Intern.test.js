const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
    const testSchool = "NYU";
    const e = new Intern("Jimmy", 2, "jimmy@johns.com", testSchool);
    expect(e.school).toBe(testSchool);
});

test("getRole method returns string Intern", () => {
    const testRole = "Intern";
    const e = new Intern("Johnny", 1, "Johnny@appleseed.com", "NYU");
    expect(e.getRole()).toBe(testRole);
});

test("Can get school with getSchool method", () => {
    const testSchool = "NYU";
    const e = new Intern("Jimmy", 2, "jimmy@johns.com", testSchool);
    expect(e.getSchool()).toBe(testSchool)
});