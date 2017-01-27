export default (listeners, eventName, payload) => {
  listeners[eventName] && listeners[eventName].map(fn => fn(payload))
  return listeners
}
