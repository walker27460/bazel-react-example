import { defineConfig } from "@rsbuild/core"
import { pluginReact } from "@rsbuild/plugin-react"
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      module: {
        rules: [
          {
            test: /\.ts?x$/,
            exclude: [/node_modules/],
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  jsx: true
                },
                transform: {
                  react: {
                    pragma: "React.createElement",
                    pragmaFrag: "React.Fragment",
                    throwIfNamespace: true,
                    development: false,
                    useBuiltins: false
                  }
                }
              }
            },
            type: "javascript/auto"
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: "builtin:lightningcss-loader",
                options: {
                  targets: "defaults"
                }
              }
            ]
          }
        ]
      }
    }
  }
})
