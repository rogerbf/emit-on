import add from './add'

test(`adds a listener to a new collection of listeners`, () => {
  const listener = () => {}
  expect(add({}, `an-event`, listener)).toEqual({ 'an-event': [ listener ] })
})

test(`adds a listener to existing array of listeners`, () => {
  const a = () => {}
  const b = () => {}
  expect(
    add({ tree: [ a ] }, `tree`, b)
  ).toEqual({ tree: [ a, b ] })
})
