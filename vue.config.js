const Timestamp = new Date().getTime();
module.exports = {
    publicPath: './', // 默认'/'，部署应用包时的基本 URL
    outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
    assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
    lintOnSave: false,
    runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap: false,  // 生产环境的 source map
    parallel: require('os').cpus().length > 1,
    pwa: {},
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 添加别名
        // config.resolve.alias
        //   .set('@', resolve('src'))
        //   .set('assets', resolve('src/assets'))
        //   .set('components', resolve('src/components'))
        //   .set('layout', resolve('src/layout'))
        //   .set('base', resolve('src/base'))
        //   .set('static', resolve('src/static'));
    },
    configureWebpack: { // webpack 配置    
        output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】      
            filename: `[name].${Timestamp}.js`,
            chunkFilename: `[name].${Timestamp}.js`
        }
    },
    transpileDependencies: ['vue-plugin-load-script']
};