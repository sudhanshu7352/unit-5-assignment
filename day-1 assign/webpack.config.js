const path =require("path");

module.exports ={
    entry :"./src/index.js",
    mode : "development",
    output :{
        path : path.resolve(__dirname,"build"),
        filename : "bundle.js"
    },
    // module: {
    //     rules: [
    //       {
    //         test: /\.(png|jpe?g|gif)$/i,
    //         use: [
    //           {
    //             loader: 'file-loader',
    //           },
    //         ],
    //       },
    //     ],
    //   },
      module: {
        rules: [
          { test: /\.css$/, use: ["style-loader",'css-loader'] },
          { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' },
        ],
      },
}