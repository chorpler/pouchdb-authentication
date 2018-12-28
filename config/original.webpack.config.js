const path = require('path');
const { resolve } = require('path');
const packageJson = require('../package.json');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm

let pathsToClean = [
  // 'dist',
  'build',
];

let pathsToExclude = [
  // 'dist',
  // 'build',
];

// the clean options to use
let cleanOptions = {
  root:     getRootDir(),
  // exclude:  ['shared.js'],
  exclude:  pathsToExclude,
  verbose:  true,
  // dry:      true,
  dry:      false,
};


function getRootDir() {
  let outPath = __dirname;
  let pathdir = path.join(outPath, '..');
  // console.log(`rootDir(): path is '${outPath}'`);
  return pathdir;
}

function getBundleName() {
  let projName = packageJson.name;
  return projName + "bundle.js";
}

function srcPath(subdir) {
  let rootDir = getRootDir();
  let outPath = path.join(rootDir, "src", subdir);
  console.log("srcPath(): path is:\n", outPath);
  return outPath;
}

function buildPath() {
  return 'dist';
  // return 'build';
}

function relativeBuildPath() {
  let outPath = path.join("..", buildPath());
  console.log("relativeBuildPath(): result is:\n", outPath);
  return outPath;
}

function getBuildPath() {
  let outPath = resolve(__dirname, relativeBuildPath());
  console.log("getBuildPath(): result is:\n", outPath);
}

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    'app': srcPath('index.ts'),
    // 'domain': './src/domain/index.ts'
  },
  output: {
    // filename: 'bundle.js',
    filename: getBundleName(),
    path: getBuildPath(),
    publicPath: buildPath() + "/",

  },
  resolve: {
    // symlinks: false,
    // alias: {
    //   // 'onsitexdomain'  : srcPath('domain')     ,
    //   'workerModule'      : srcPath('worker')    ,
    // },
    modules: [
      'src',
      'node_modules'
    ],
    extensions: [
      '.js',
      '.ts'
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: "source-map-loader",
        // exclude: /workerModule/,
      },
      {
        // For our normal typescript
        test: /\.ts$/,
        use: [{
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: 'tsconfig.json'
          }
        }],
        exclude: [
          /(?:node_modules)/,
          // /\.worker\.ts/
        ]
      },
    ]
  },
  // devtool: 'inline-source-map'
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ],
};
