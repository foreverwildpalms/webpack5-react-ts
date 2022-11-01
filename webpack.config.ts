import {WebpackMergeArgs, WebpackConfig} from "./webpack-configs/types";
import devConfig from './webpack-configs/dev';
import prodConfig from './webpack-configs/prod';

export default (env: string, args: WebpackMergeArgs): WebpackConfig => {
    const isProd = Boolean(args.env.WEBPACK_BUILD);

    if (isProd) {
        return prodConfig;
    } else {
        return devConfig;
    }
};