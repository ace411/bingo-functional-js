const F = require('../index')

test('slugify replaces spaces in text with dashes', () => {
    const slugified = F.slugify('lorem ipsum')

    expect(slugified).toBe('lorem-ipsum')
})