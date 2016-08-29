import {WebpackConfig, get} from '@easy-webpack/core'
import * as path from 'path'

/**
 * Pug loader support for .pug
 * See: https://github.com/willyelm/pug-html-loader
 */
export = function pug({exclude = null} = {}) {
  return function pug(this: WebpackConfig): WebpackConfig {
    const loader = {
      test: /\.pug$/,
      loader: 'pug-html',
      exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : [])
    } as any

    return {
      resolve: {
        extensions: get(this, 'resolve.extensions', ['', '.html']).concat(['.pug'])
      },
      module: {
        loaders: get(this, 'module.loaders', []).concat([loader])
      }
    }
  }
}
