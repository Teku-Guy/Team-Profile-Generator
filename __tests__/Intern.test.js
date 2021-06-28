
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const e = new Intern("Goose", 1, "test@test.com", "UCLA");
  expect(e.school).toBe("UCLA");
});

test("getRole() should return \"Intern\"", () => {
  const e = new Intern("Goose", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe("Intern");
});

test("Can get school via getSchool()", () => {
  const e = new Intern("Goose", 1, "test@test.com", "UCLA");
  expect(e.getSchool()).toBe("UCLA");
});