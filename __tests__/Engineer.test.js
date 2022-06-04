const Engineer = require('../lib/Engineer');

test('Creates an Engineer github name', () => {
    var engineer = new Engineer('Chuck', 5, 'test@email.com', 'testgithub');

    expect(engineer.github).toBe('testgithub');
});