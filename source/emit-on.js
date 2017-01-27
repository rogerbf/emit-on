export default ({ add, notify, listeners }) => {
  const eventEmitter = {
    emit (eventName, payload) {
      notify(listeners, eventName, payload)
      return eventEmitter
    },
    on (eventName, listener) {
      listeners = add(listeners, eventName, listener)
      return eventEmitter
    }
  }
  return eventEmitter
}
