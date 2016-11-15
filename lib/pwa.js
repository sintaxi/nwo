
var microplatform = require("microplatform")

module.exports = microplatform({
  cmd: "pwa",
  name: "pwa platform",
  domain: "pwa.sh",
  default: __dirname + "/default"
})
