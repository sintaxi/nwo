
var microplatform   = require("microplatform")
var config          = require("../package.json")
config.boilerplate  = __dirname + "/../boilerplate"
module.exports      = microplatform(config)
