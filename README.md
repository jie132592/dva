# dva
安装dva-cli
$ npm install dva-cli -g
$ dva -v
dva-cli version 0.9.1
$ dva new dva-quickstart
这会创建 dva-quickstart 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。
$ cd dva-quickstart
$ npm start //启动服务器
Compiled successfully!

The app is running at:

  http://localhost:8000/

Note that the development build is not optimized.
To create a production build, use npm run build.

在浏览器里打开 http://localhost:8000 ，你会看到 dva 的欢迎界面。

使用 antd
通过 npm 安装 antd 和 babel-plugin-import 。babel-plugin-import 是用来按需加载 antd 的脚本和样式的
$ npm install antd babel-plugin-import --save
编辑 .webpackrc，使 babel-plugin-import 插件生效。
{
+  "extraBabelPlugins": [
+    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
+  ]
}