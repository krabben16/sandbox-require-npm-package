module.exports = {
  mode: "development",
  entry: "./src/esm.js",
  output: {
    path: `${__dirname}`,
    filename: "index-esm.js"
  }
}
