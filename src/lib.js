
var microplatform   = require("microplatform")
var pkg             = require("../package.json")

module.exports = microplatform(Object.assign(pkg, {
  platform: "nwo.sh",
  boilerplate: __dirname + "/../boilerplate"
}))
