import {makeInstaller} from '@font-element/utils'
import components from "./components.ts";
import '@font-element/theme/index.css'

const installer = makeInstaller(components)

export * from '@font-element/components'
export default installer