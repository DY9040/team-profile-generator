const Intern = require('../lib/Intern');

test('Creates an Intern school name', () => {
    var intern = new Intern('Chuck', 5, 'test@gmail.com', 'testschool');

    expect(intern.school).toBe('testschool');
});