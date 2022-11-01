import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';

export type WebpackConfig = webpack.Configuration &
    webpackDevServer.Configuration;

export enum WEBPACK_MERGE_ARGS_ENV {
    WEBPACK_BUNDLE = 'WEBPACK_BUNDLE',
    WEBPACK_BUILD = 'WEBPACK_BUILD',
}

export interface WebpackMergeArgs {
    env: Record<WEBPACK_MERGE_ARGS_ENV, boolean>;
}