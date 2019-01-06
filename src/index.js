import '@webcomponents/shadydom'
import '@webcomponents/custom-elements'
import '@webcomponents/custom-elements/src/native-shim';
import {
  // basic
  Button
} from './module'

import { processComponentName } from './common/helpers/util'

const components = [
  // basic
  Button
]

const Ghost = {
  /* eslint-disable no-undef */
  version: __VERSION__
}

components.forEach((Component) => {
  const name = processComponentName(Component, {
    firstUpperCase: true
  })
  Ghost[name] = Component

})

export default Ghost
