const Engineer = require('../lib/Engineer');

test('Creates an Engineer github name', () => {
    var employee = new Engineer('Chuck', 5, 'test@email.com', 'testgithub');

    expect(employee.github).toBe('testgithub');
});