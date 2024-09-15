import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const babelLoader =     {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }]
        ]
      }
    }
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
  }

    //Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: ((resPath: string) => Boolean(resPath.includes('.module.'))),
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
              },
            }
          }
          ,
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        scssLoader,
    ]
}