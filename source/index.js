import add from './add'
import notify from './notify'
import emitter from './emit-on'

export default emitter.bind(null, { add, notify, listeners: {} })
