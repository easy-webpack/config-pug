"use strict";
var core_1 = require('@easy-webpack/core');
var path = require('path');
module.exports = function pug(_a) {
    var _b = (_a === void 0 ? {} : _a).exclude, exclude = _b === void 0 ? null : _b;
    return function pug() {
        var loader = {
            test: /\.pug$/,
            loader: 'pug-html',
            exclude: exclude || (this.metadata.root ? [path.join(this.metadata.root, 'node_modules')] : [])
        };
        return {
            resolve: {
                extensions: core_1.get(this, 'resolve.extensions', ['', '.html']).concat(['.pug'])
            },
            module: {
                loaders: core_1.get(this, 'module.loaders', []).concat([loader])
            }
        };
    };
};
//# sourceMappingURL=index.js.map