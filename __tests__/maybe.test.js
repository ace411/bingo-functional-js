const _ = require('../index')
const { strArr } = require('./data')

let maybe

beforeEach(() => {
    maybe = _.fromValue(2)
})

test('maybe performs case analysis on Maybe', () => {
    const func = _.partial(_.maybe, 'baz', _.partial(_.concat, '-', 'foo'))

    expect(func(_.fromValue('bar'))).toEqual('foo-bar')
    expect(func(_.fromValue(null))).toEqual('baz')
})

test('isJust checks if object is instance of Just', () => {
    const just = _.isJust(maybe)
    const notJust = _.isJust(_.fromValue(null))

    expect(just).toEqual(true)
    expect(notJust).toBeFalsy()
})

test('isNothing checks if object is instance of Nothing', () => {
    const notNothing = _.isNothing(maybe)
    const nothing = _.isNothing(_.fromValue(null))

    expect(nothing).toEqual(true)
    expect(notNothing).toBeFalsy()
})

test('fromJust extracts element from Just and throws error if Nothing', () => {
    const just = _.fromJust(maybe)
    const notJust = _.toException(_.fromJust)(_.fromValue(null))

    expect(just).toEqual(2)
    expect(notJust).toEqual('Maybe.fromJust: Nothing')
})

test('fromMaybe returns default value if Maybe is Nothing and Just value otherwise', () => {
    const func = _.partial(_.fromMaybe, 'foo')

    const just = func(maybe)
    const notJust = func(_.fromValue(null))

    expect(just).toEqual(2)
    expect(notJust).toEqual('foo')
})

test('listToMaybe returns Nothing on empty list and Just containing first list item otherwise', () => {    
    const just = _.listToMaybe({ a: 33, b: 49 })
    const notJust = _.listToMaybe([])

    expect(_.isJust(just)).toEqual(true)
    expect(just.getJust()).toEqual(33)
    expect(_.isNothing(notJust)).toEqual(true)
})

test('maybeToList returns empty list when given Nothing and singleton otherwise', () => {
    const singleton = _.maybeToList(maybe)
    const empty = _.maybeToList(_.fromValue(null))

    expect(singleton).toEqual([2])
    expect(empty).toEqual([])
})

test('catMaybes takes a list of Maybes and returns all Just values', () => {
    const cat = _.catMaybes([
        _.fromValue(33),
        _.fromValue(null),
        _.fromValue('foo')
    ])

    expect(cat).toEqual([33, 'foo'])
})

test('mapMaybe is a version of map which can throw out elements', () => {
    const mapped = _.mapMaybe((x) => _.fromValue(x.toUpperCase()), strArr)

    expect(mapped).toEqual(['FOO', 'BAR'])
})
