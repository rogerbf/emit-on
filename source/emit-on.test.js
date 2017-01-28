import eventEmitter from './emit-on'

test(`eventEmitter`, () => {
  const add = jest.fn()
  const notify = jest.fn()
  const listeners = {}
  const emitter = eventEmitter({ add, notify, listeners })

  const keys = Object.keys(emitter)

  expect(keys).toHaveLength(2)
  expect(keys).toContain(`on`)
  expect(keys).toContain(`emit`)
})

test(`on`, () => {
  const add = jest.fn()
  const notify = jest.fn()
  const listeners = {}
  const emitter = eventEmitter({ add, notify, listeners })

  const listener = jest.fn()
  emitter.on(`hyperdrive`, listener)
  expect(add).toHaveBeenCalledWith(listeners, `hyperdrive`, listener)
})

test(`emit`, () => {
  const add = jest.fn()
  const notify = jest.fn()
  const listeners = {}
  const emitter = eventEmitter({ add, notify, listeners })

  emitter.emit(`hyperdrive`, `engage`)
  expect(notify).toHaveBeenCalledWith(listeners, `hyperdrive`, `engage`)
})
