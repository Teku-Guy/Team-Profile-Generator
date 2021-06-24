const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 1, 'gmuratalla@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Employee');
});