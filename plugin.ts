// plugin.ts

import type { IApi } from "umi"

export default (api: IApi) => {
  api.modifyBabelPresetOpts((memo) => {
    memo.presetReact.importSource = '@welldone-software/why-did-you-render'
    return memo
  })
}