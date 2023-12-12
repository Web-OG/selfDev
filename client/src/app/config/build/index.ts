import webpack from "webpack";
import {devServerConfig} from "./devServerConfig";
import {loadersConfig} from "./loadersConfig";
import {pluginsConfig} from "./pluginsConfig";
import {resolversConfig} from "./resolversConfig";

export type BuildPaths = {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;
}

export type BuildMode = 'production' | 'development';

export type BuildOptions = {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean,
    captcha?: boolean
}

export const createWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode} = options;
    const isDev = mode === 'development';

    return {
        mode: mode ?? 'production',
        entry: paths.entry,
        module: {
            rules: loadersConfig(options)
        },
        resolve: resolversConfig(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        plugins: pluginsConfig(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? devServerConfig(options) : undefined,
    };
}