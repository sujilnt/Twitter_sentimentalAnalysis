const webpack = require('webpack');
const { join } = require('path');
const pathTo = path => join(__dirname, path);
const config = { module: {} };

// paths
const dist = pathTo('./dist');
const src = pathTo('./src');
const exclude = /node_modules/;

// Plugins
const CleanPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { extract } = ExtractTextPlugin;
const nodeObj = {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
};


// Context.
config.context = src;
config.node= nodeObj;

// Entry.
config.entry = ['./styles/index.scss', './index.js'];


// Rules.
config.module.rules = [{
    test: /\.js$/,
    exclude: exclude,
    use: 'babel-loader',
},{
    test: /\.json$/,
    use: 'json-loader'
}, {
    test: /\.(scss)$/,
    loader: extract({
        use: 'css-loader!postcss-loader!sass-loader'
    }),
}];


// Output.
config.output = {
    path: dist,
    filename: 'script.js',
};

const devconfiguration = {
    host: '127.0.0.1',
    historyApiFallback: true,
    disableHostCheck: true
};

module.exports = env => {
    const shouldClean = env && env.production ? new CleanPlugin(['./dist']) : () => {};
    config.plugins = [
        shouldClean,
        new CopyPlugin([{ context: './images', from: '**/*', to: dist + '/images' }]),
        new CopyPlugin([{ from: './index.html', to: dist }]),
        new ExtractTextPlugin('style.css'),
    ];
    config.devServer=devconfiguration;

    return config;
}
