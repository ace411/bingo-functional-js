const _ = require('../index')

test('ap performs function application', () => {
    const reader = _.reader(name => `Hello ${name}`)

    expect(reader).toBeInstanceOf(_.Reader)
    expect(reader.run('Mike')).toEqual('Hello Mike')
})

test('map applies function to value encapsulated in Reader', () => {
    const reader = _.mapReader(
        (x => y => y + x), 
        _.reader(x => x + 2)
    )

    expect(reader).toBeInstanceOf(_.Reader)
    expect(_.runReader(reader, 2)).toEqual(6)
})

test('bind offers forward function chaining', () => {
    const reader = _.reader(name => `Hi, ${name}.`)
        .bind(expr => _.reader(name => expr + (name !== 'World' ? ' How are you?' : '')))

    expect(reader).toBeInstanceOf(_.Reader)
    expect(_.runReader(reader, 'Mike')).toEqual('Hi, Mike. How are you?')
    expect(_.runReader(reader, 'World')).toEqual('Hi, World.')
})

test('ask outputs Reader monad environment', () => {
    const reader = _.ask()

    expect(reader).toBeInstanceOf(_.Reader)
})