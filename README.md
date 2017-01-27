# emit-on

When all you need is to emit och listen to events.

```javascript
import eventEmitter from 'emit-on'

const emitter = eventEmitter()

emitter
.on(`scotty`, console.log.bind(null, `scotty says:`))
.emit(`scotty`, `beam me up`)
// "scotty says: beam me up"
```
