const path = require("path");

module.exports = {
    mode : "development",
    entry : "./app/ceshidoto/components/App.js",
    output : {
        path : path.resolve(__dirname,"dist"),
        filename : "main.js" 
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },
            {
                test : /\.less$/,
                use : ["style-loader","css-loader","less-loader"]
            }
        ]
    },
    devServer : {
        contentBase : path.join(__dirname,"dist")
    }
}