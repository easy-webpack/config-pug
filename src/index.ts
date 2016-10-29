import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
import * as path from 'path'

/**
 * Pug loader support for .pug
 * See: https://github.com/willyelm/pug-html-loader
 */
export = function pug({exclude = null} = {}) {
  return function pug(this: WebpackConfigWithMetadata): WebpackConfigWithMetadata {
    const loader = {
      test: /\.pug$/,
      loader: 'pug-html',
      exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : [])
    } as any

    return {
      resolve: {
        extensions: get(this, 'resolve.extensions', ['.js']).concat(['.pug'])
      },
      module: {
        loaders: get(this, 'module.loaders', []).concat([loader])
      }
    }
  }
}
