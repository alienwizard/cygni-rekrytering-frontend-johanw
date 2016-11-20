var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: ['bootstrap-loader','./app/app.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            //JS laoder
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'ng-annotate!babel'
            },
            //html loader for the templates
            {
                test: /\.html$/,
                loader:'raw'
            },
            //Json loader for data
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loaders: ['json']
            },
            //Loader for our sass
            {
                test: /\.scss$/,
                loaders:['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            },
            //loader for good ol css if we are feeling comfy
            {
                test: /\.css$/,
                loaders:['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
            },
            //loader for fonts and images
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|otf)$/,
                loader: 'url-loader?limit=100000'
            },

        ]

    }, //Modules end

    //Loading jquery as a dependency
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}