export default (listeners, eventName, listener) =>
  listeners[eventName]
  ? { ...listeners, [eventName]: [ ...listeners[eventName], listener ] }
  : { ...listeners, [eventName]: [ listener ] }
