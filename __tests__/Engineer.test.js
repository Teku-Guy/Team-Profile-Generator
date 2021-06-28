  
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const e = new Engineer("Goose", 1, "test@test.com", "Teku-Guy");
  expect(e.github).toBe("Teku-Guy");
});

test("getRole() should return \"Engineer\"", () => {
  const e = new Engineer("Goose", 1, "test@test.com", "Teku-Guy");
  expect(e.getRole()).toBe("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
  const e = new Engineer("Goose", 1, "test@test.com", "Teku-Guy");
  expect(e.getGithub()).toBe("Teku-Guy");
});