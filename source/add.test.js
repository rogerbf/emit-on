import add from './add'

test(`adds a listener`, () => {
  const listener = () => {}
  expect(add({}, `an-event`, listener)).toEqual({ 'an-event': [ listener ] })
})

test(`adds a listener to existing array`, () => {
  const a = () => {}
  const b = () => {}
  expect(
    add({ tree: [ a ] }, `tree`, b)
  ).toEqual({ tree: [ a, b ] })
})
