import {makeInstaller} from '@font-element/utils'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import components from "./components.ts";
import '@font-element/theme/index.css'

library.add(fas)
const installer = makeInstaller(components)

export * from '@font-element/components'
export default installer