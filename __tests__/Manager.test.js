const Manager = require('../lib/Manager');

test('Creates an Manager school name', () => {
    var employee = new Manager('Chuck', 5, 'test@gmail.com', 'testOffice');

    expect(employee.office).toBe('testOffice');
});