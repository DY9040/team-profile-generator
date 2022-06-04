const Employee = require('../lib/Employee');

test('Create an employee name', () => {
    var employee = new Employee('Chuck');

    expect(employee.name).toBe('Chuck');
});