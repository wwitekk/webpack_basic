const path = require('path');

module.exports = {

    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'babel-loader',
                options: {
                    presets:[
                        ['es2015', {modules: false}]
                    ]
                }
            }]
        },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
    },
    devServer: {
        contentBase: path.join(__dirname, "src"),
        compress: true,
        port: 9000
    }

}