const Manager = require('../lib/Manager');

test("Can set office number via constructor argument", () => {
    const e = new Manager("Goose", 1, "test@test.com", 100);
    expect(e.officeNumber).toBe(100);
});
  
test('getRole() should return "Manager"', () => {
    const e = new Manager("Goose", 1, "test@test.com", 100);
    expect(e.getRole()).toBe("Manager");
});
  
test("Can get office number via getOffice()", () => {
    const e = new Manager("Goose", 1, "test@test.com", 100);
    expect(e.getOffice()).toBe(100);
});