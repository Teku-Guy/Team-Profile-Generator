const Engineer = require('../lib/Engineer');

test('creates a manager object', () => {
    const employee = new Engineer('Dave', 1, 'gmuratalla@gmail.com', "teku-guy");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Engineer');
});