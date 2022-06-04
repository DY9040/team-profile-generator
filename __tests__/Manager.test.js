const Manager = require('../lib/Manager');

test('Creates an Manager school name', () => {
    var manager = new Manager('Chuck', 5, 'test@gmail.com', 'testOffice');

    expect(manager.office).toBe('testOffice');
});