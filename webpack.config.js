var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        'main':'./build/main',
        'libs':[
            'jquery',
            'rxjs'
        ]
    },
    output:{
        path:'./bundled-build',
        filename:'app.js'
    },
    devtool:[
        // 'source-map'
    ],
    resolve:{
        extensions:['','.js']
    },
    module:{
        loaders:[
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./build/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'libs',
            filename:'libs.js'
        })
    ]
};