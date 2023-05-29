import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import {BuildPaths} from '../build/types/config'
import buildCssLoaders from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
	src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.	tsx');
  config.module?.rules?.push(buildCssLoaders(true))

  config.module?.rules?.unshift({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });
  return config
};