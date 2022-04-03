const newMap = require ("../cache/newMap.js")
module.exports = {
alwaysExecute: new newMap(),
botJoin: new newMap(),
botLeave: new newMap(),
default: new newMap(),
memberJoin: new newMap(),
memberLeave: new newMap(),
executable: new newMap()
}
