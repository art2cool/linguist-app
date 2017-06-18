module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /public/, /bower_components/],
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                exclude: [/node_modules/, /public/, /bower_components/],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /public/, /bower_components/],
                loader: 'style-loader!css-loader!resolve-url!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    }
};
