import express from "express";import path from "path";const server= express();// taking configuration from the webpack adding to expressconst webpack = require("webpack");const config = require("../../webpack.config.js");const webpackconfig = config();const webpackConfigDevSever= webpackconfig.devServer;const compiler = webpack(webpackconfig);const webpackDevMiddleWare = require("webpack-dev-middleware");const webpackHottMiddleWare = require("webpack-hot-middleware");const webpackDevMiddleWareFunc=webpackDevMiddleWare(compiler,webpackConfigDevSever);server.use(webpackDevMiddleWareFunc);server.use(webpackHottMiddleWare(compiler));const webpackHotMiddleWare = require("webpack-hot-middleware");const staticMiddleware= express.static("dist");server.use(staticMiddleware);server.listen(8080,()=>{    console.log("Server is listening ");});