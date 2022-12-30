const Engineer = require("../lib/Engineer");

test("Can set github with constructor", () => {
    const testGit = "ScaredPanda";
    const e = new Engineer ("Wyatt", 6, "wyatt@erp.com", testGit);
    expect(e.github).toBe(testGit);
});

test("getRole method should return string Engineer", () => {
    const testRole = "Engineer";
    const e = new Engineer ("Jimmy", 4, "blahblah@blah.com", "ScaredPanda");
    expect(e.getRole()).toBe(testRole);
});

test("Can get github with getGithub method", () => {
    const testGit = "ScaredPanda";
    const e = new Engineer ("Johnny", 3, "johnny@blah.com", testGit);
    expect(e.getGithub()).toBe(testGit);
});