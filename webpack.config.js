var webpack = require("webpack");
// var Ext = require("extract-text-webpack-plugin");
module.exports = {
    entry : __dirname + "/src/js/main.js",
    output : {
        path : __dirname + "/dist/",
        filename : "index.js"
    },
    devtool : "source-map",
    module : {
        loaders : [
            {test : /\.js$/ , exclude : /node_modules/ , loader : "babel-loader?presets[]=es2015"},
            // {test : /\.css$/ , loader : Ext.extract("css-loader")},
            // {test : /\.less$/ , loader : Ext.extract("css-loader!less-loader")}
        ]
    },
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 3000,
        inline : true
     },
     plugins : [
        //  new Ext("css/index.css"),
         new webpack.ProvidePlugin({
             Vue : "vue/dist/vue.js",
             VueRouter : "vue-router/dist/vue-router.common.js"
         })
     ]
}