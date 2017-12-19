/**
 * webpack 打包配置文件
 * @author ilex
 */

var simpleConfig = require('amos-build/lib/simpleConfig');

// ------------------------------------------------------
// 添加webpack加载别名,用于导包重定向，优化打包以及代码
// 此处需要自己进行定义
// 👻可修改
// ------------------------------------------------------
var alias = {
  'rayloading': __dirname + '/src/RayLoading.js'
};

var config = {
  tpl: './example/tpl.html',
  toFile: 'index.html',
  port: 3001,
  alias: alias,
  sourceMap: true
};

var defaultConfig = simpleConfig(config);

defaultConfig.name = 'amos-init';

// ------------------------------------
// 入口点
// ------------------------------------
defaultConfig.entry = {
  app: './example/Example.js'
};

// ------------------------------------
// 设置alias的另一种方式
// ------------------------------------
// if(alias){
//   defaultConfig.resolve.alias = alias;
// }

module.exports = defaultConfig;
