module.exports = {
    entry: {
        app: "./src/app/main.tsx"
    },
    output: {
        filename: "./www/[name]Bundle.js",
        library: "page"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules'],
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test   :/\.jsx?$/,
                exclude:/(node_modules)/,
                loader :'babel',
                query  :{
                    cacheDirectory: false,
                    presets:['es2015','react']
                }
            }
        ],
        
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ],

        noParse: [
            /node_modules\/(jquery|react)/
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "jquery": "$"
    },
};
