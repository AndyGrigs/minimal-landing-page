import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[]{
    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // const styleLoader = {
        
    //         test: /\.s[ac]ss$/i,
    //         use: [
    //          
    //           isDev ? "style-loader" :  MiniCssExtractPlugin.loader,
    //           // Translates CSS into CommonJS
    //           {
    //             loader: "css-loader",
    //             options: {
    //               modules: {
    //                 auto: (resPath: string) => Boolean(resPath.includes('.module.')),
    //                 localIndentName: isDev 
    //                ? '[path][name]__[local]': 
    //                '[hash:base64:8]'
            
    //               },
    //                   }
    //           },
    //           // Compiles Sass to CSS
    //           "sass-loader",
    //         ],
    //       }

    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
              loader: 'css-loader',
              options: {
                  modules: {
                      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                      localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                  },
              }
          },
          'sass-loader',
      ]
  }
    

    return [
        typescriptLoader,
       // styleLoader
       cssLoader
    ]
}