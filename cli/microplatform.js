
var surge = require("surge")
var pkg = require("./package.json")
var chalk = require("chalk")
var minimist = require("minimist")

module.exports = function(config){

  var cmd      = config.cmd     || "foo"
  var name     = config.name    || cmd + " Platform"
  var domain   = config.domain  || "pwa.sh"

  var platform = surge({
    name:   name,
    domain: domain
  })

  var help = function(){
    console.log()
    console.log(chalk.bold("  "+ name +" " +chalk.grey("v" + pkg.version)) + chalk.grey(" - powered by surge.sh "))
    console.log(chalk.grey("  Dev server and CDN enabled project publishing to"), chalk.underline.green(domain))
    console.log()
    // console.log(chalk.grey("  Usage:"))
    // console.log("    "+ name +" <source> [domain|output]")
    console.log(chalk.grey("  Usage:"))
    console.log("    "+ cmd +" <source>             Starts dev server on <source> directory")
    console.log("    "+ cmd +" <source> <domain>    Publishes <source> directory to https://<domain>")
    console.log("    "+ cmd +" <source> <output>    Compiles <source> into <output>")
    console.log("    "+ cmd +" <source> _           Prompt for publishing to random _." + domain, "subdomain")
    console.log("    "+ cmd +" teardown <domain>    Removes <domain> from the web")
    console.log("    "+ cmd +" list                 Lists all published projects")
    console.log("    "+ cmd +" login                Authenticate on current machine")
    console.log("    "+ cmd +" logout               Terminate session on current machine")
    console.log("    "+ cmd +" whoami               Check authenticated account on current machine")
    // console.log(chalk.grey("  Options:"))
    // console.log("    -p,   --port             Specify port for server to listen on (9000)")
    // console.log("    -i,   --ip               I.P. address for server to bind to (127.0.0.1)")
    console.log()
    console.log(chalk.grey("  Examples:"))
    console.log("    "+ cmd +" .                    Serves current dir on port 9966")
    console.log("    "+ cmd +" . example.com        Publishes current dir to `example.com`")
    console.log("    "+ cmd +" . www                Compiles current dir to `www` directory")

    console.log()
    console.log(chalk.grey("  please visit ") + chalk.underline.green(domain) + chalk.grey(" for more information"))
    console.log()
    process.exit()
  }
  
  return function(arg){
    // need minimist here.
    var argv = minimist(process.argv.slice())
    var cmds = argv["_"]

    if (cmds.length > 2){
      if (cmds.length > 3){
        console.log("compiling or publishing...")
        // compile or
      } else {
        console.log("starting server...")
        // start server
      }
    } else {
      return help(argv)  
    }
    
  }

}

process.on('SIGINT', function() {
  console.log("\n")
  global.ponr == true
    ? console.log("    Disconnected".green, "-", "Past point of no return, completing in background.")
    : console.log("    Cancelled".yellow, "-", "Upload aborted, publish not initiated.")
  console.log()
  process.exit(1)
})