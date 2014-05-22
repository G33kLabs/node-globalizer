module.exports = function(libs) {
    if (typeof libs == 'object') libs = [libs];
    libs.forEach(function(mod, idx) {
        if (typeof mod == 'string') {
            GLOBAL[mod] = require(mod);
        } else if (typeof mod == 'object') {
            for (var _name in mod) {
                GLOBAL[_name] = require(mod[_name]);
            }
        }
    });
}