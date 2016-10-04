
var microplatform = require("./microplatform")

var pwa = module.exports = microplatform({
  cmd: "pwa",
  name: "pwa platform",
  domain: "pwa.sh",
  default: __dirname + "/default"
})
