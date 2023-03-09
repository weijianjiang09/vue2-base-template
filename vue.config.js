/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-04-16 23:16:23
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-17 15:11:44
 */
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
const CompressionPlugin = require('compression-webpack-plugin')
const name = process.env.VUE_APP_TITLE
module.exports = {
    publicPath: './',
    productionSourceMap: false,
    lintOnSave: process.env.NODE_ENV === 'development',
    devServer: {
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.TARGET,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        },
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css|html)?$/i, // 压缩文件格式
                filename: '[path].gz[query]', // 压缩后的文件名
                algorithm: 'gzip', // 使用gzip压缩
                minRatio: 0.8 // 压缩率小于1才会压缩
            })
        ]
    },
    chainWebpack: config => {
        // 压缩图片
        config.module.rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
    }
}
