class newMap extends Map {
constructor (opt) {
super(opt)
}
set(name, value) {
return super.set(name, value)
}
get(name){
return super.get(name)
}
delete (name) {
return super.delete(name)
}
clear() {
return super.clear()
}
values() {
return Array.from(super.values())
}
keys() {
return Array.from(super.keys())
}
entries() {
return Array.from(super.entries())
}
}
module.exports = newMap
