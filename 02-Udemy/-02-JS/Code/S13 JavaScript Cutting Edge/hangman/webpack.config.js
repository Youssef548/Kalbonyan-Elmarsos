const path = require("path");
module.exports = {
    mode: "production",
    entry: ["babel-polyfill", path.resolve(__dirname, "./src/index.js")],

    output: {
        path: path.resolve(__dirname, "./public/scripts"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }, ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/scripts/",
    },
    devtool: "source-map",
};