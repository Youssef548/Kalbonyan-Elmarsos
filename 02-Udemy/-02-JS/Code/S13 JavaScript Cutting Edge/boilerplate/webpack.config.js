const path = require("path");
module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.js"),

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
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread"
                    ]
                },
            },
        },],
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/scripts/",
    },
    devtool: "source-map",
};