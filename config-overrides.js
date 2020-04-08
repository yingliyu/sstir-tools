const { 
  override, 
  fixBabelImports, 
  addLessLoader, 
  addWebpackPlugin,
  addWebpackAlias,
  addDecoratorsLegacy,
  useEslintRc,
  adjustStyleLoaders
} = require('customize-cra')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, '.', dir)
}

 module.exports = override(
    // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true
   }),
   // 更换主题配置
    addLessLoader({
     javascriptEnabled: true,
     modifyVars: { '@primary-color': '#1DA57A' }
   }),
   // 配置路径别名
   addWebpackAlias({
    '@': resolve('src')
  }),
  addDecoratorsLegacy(), // 使用装饰器
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  useEslintRc(), // 使用.eslintrc.js
  adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor ] }) => {
    css.options.sourceMap = true;         // css-loader
    postcss.options.sourceMap = true;     // postcss-loader
    // when enable pre-processor,
    // resolve-url-loader will be enabled too
    if (resolve) {
      resolve.options.sourceMap = true;   // resolve-url-loader
    }
    // pre-processor
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.sourceMap = true; // sass-loader
    }
  })
 )