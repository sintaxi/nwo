
var microplatform = require("microplatform")
var pkg = require("../package.json")

module.exports = microplatform({
  cmd: "nwo",
  name: "nwo platform",
  platform: "nwo.sh",
  version: pkg.version,
  boilerplates: __dirname + "/boilerplates"
})
