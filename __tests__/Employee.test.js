const Employee = require('../lib/Employee');

test('Create an employee name', () => {
    var employee = new Employee('Chuck');

    expect(employee.name).toBe('Chuck');
});

test('Creates an employee id', () => {
    var employee = new Employee('Chuck', 5);

    expect(employee.id).toBe(5);
});

test('Creates an employee email', () => {
    var employee = new Employee('Chuck', 5, 'test@email.com');

    expect(employee.email).toBe('test@email.com');
});