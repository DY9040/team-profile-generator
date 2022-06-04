const Intern = require('../lib/Intern');

test('Creates an Intern school name', () => {
    var employee = new Intern('Chuck', 5, 'test@gmail.com', 'testschool');

    expect(employee.school).toBe('testschool');
});