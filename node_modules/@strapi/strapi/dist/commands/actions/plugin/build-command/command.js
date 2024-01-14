"use strict";
const commander = require("../../../utils/commander.js");
const helpers = require("../../../utils/helpers.js");
const action = require("./action.js");
const command = ({ command: command2 }) => {
  command2.command("plugin:build").description("Bundle your strapi plugin for publishing.").addOption(commander.forceOption).option("-d, --debug", "Enable debugging mode with verbose logs", false).option("--silent", "Don't log anything", false).option("--sourcemap", "produce sourcemaps", false).option("--minify", "minify the output", false).action(helpers.runAction("plugin:build", action));
};
module.exports = command;
//# sourceMappingURL=command.js.map
