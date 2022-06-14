module.exports = {
  name: "$reboot",
  usage: "None",
  description: "Reboots the NodeJS process",
  code: async (d) => {
    try {
        process.on("exit", () => {
            require("child_process").spawn(process.argv.shift(), process.argv, {
                cwd: process.cwd(),
                detached: true,
                stdio: "inherit",
            });
        });
        process.exit();
    } catch (e) {
        return console.log(e) && d.sendError(d, "Failed to restart");
      }
    }
  }
