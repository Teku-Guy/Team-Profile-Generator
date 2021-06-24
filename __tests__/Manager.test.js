const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const employee = new Manager('Dave', 1, 'gmuratalla@gmail.com', 100);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
    expect(employee.getRole()).toEqual('Manager');
});