# emit-on

When all you need is to emit and listen to events.

```javascript
import eventEmitter from 'emit-on'

const emitter = eventEmitter()

emitter
.on(`kirk`, console.log.bind(null, `kirk says:`))
.emit(`kirk`, `beam me up`)
// "kirk says: beam me up"
```
