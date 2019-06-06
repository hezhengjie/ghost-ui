import '@webcomponents/shadydom'
import '@webcomponents/custom-elements'
import '@webcomponents/custom-elements/src/native-shim'
import {
  // basic
  Button,
  Loading
} from './module'
const components = [
  // basic
  Button,
  Loading
]

const Ghost = {
  /* eslint-disable no-undef */
  version: __VERSION__
}

components.forEach((Component) => {
  Ghost[name] = Component.name
})

export default Ghost
