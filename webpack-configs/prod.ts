import * as path from 'path';
import 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import {WebpackConfig} from "./types";

const config: WebpackConfig = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/main.tsx'),
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].chunk.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.jsx',
            '.json',
        ],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: ['babel-loader'],
                exclude: /node_modules/i,
            },
            {
                test: /\.(ts|tsx)/i,
                use: ['ts-loader'],
                exclude: /node_modules/i,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                type: 'asset',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src', 'index.html'),
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx', 'jsx'],
        }),
    ],

}

export default config;