const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', 'src','index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.js','.jsx'],
    },
    module: {
        // говорим вебпаку что он должен для файлов с таким расширением использовать babel-loader исключая папку node_modules
        rules: [
            {
                // загрузчик для файлов с таким расширением, использовать babel
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                // загрузчик стилей нужно устанавливать лоадеры
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // из коробки , загрузчик картинок
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
                // type: 'asset/resource',
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'video/[name].[ext]',
                        },
                    },
                ],
            },
            {
                // из коробки , загрузчик svg
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'js/bundle.js',
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: path.resolve('style', '[name].css'),
        //     chunkFilename: '[id].css',
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'public','index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public','asset'),
                    to: path.resolve(__dirname, 'build','asset'),
                    noErrorOnMissing: true,
                },
            ],
        }),
    ],

    stats: 'errors-only',
};
