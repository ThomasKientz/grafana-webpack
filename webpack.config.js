const path = require("path");
const ReturnPlugin = require("./return-plugin.js");

var glob = require("glob");
const entries = glob.sync("./src/scripts/*.js").reduce((acc, item) => {
  const path = item.split("/");
  const name = path.slice(-1)[0] 
  acc[name] = item;
  return acc;
}, {});

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]'
  },
  stats: {
    errorDetails: true
  },
  optimization: {
    minimize: false
  },
  mode: "production",
  plugins: [new ReturnPlugin()]
};
