import notify from './notify'

test(`notifies listener`, () => {
  const listener = jest.fn()
  notify(
    { groundControl: [ listener ] },
    `groundControl`,
    `Take your protein pills and put your helmet on`
  )
  expect(listener.mock.calls[0])
  .toEqual([ `Take your protein pills and put your helmet on` ])
})

test(`does not notify listener`, () => {
  const listener = jest.fn()
  notify(
    { tom: [ listener ] },
    `groundControl`,
    `the stars look very different today`
  )
  expect(listener.mock.calls.length).toBe(0)
})
