const Intern = require('../lib/Intern');

test('creates a manager object', () => {
    const employee = new Intern('Dave', 1, 'gmuratalla@gmail.com', 'UCLA');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Intern');
});