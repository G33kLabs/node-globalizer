module.exports = function(libs) {

    // Arrayize 'libs'
    if (typeof libs == 'string') libs = [libs];
    else if (typeof libs == 'object') libs = [libs];

    // Walk over libs and load them as global
    libs.forEach(function(mod, idx) {

        // Lib will be named as his filename
        if (typeof mod == 'string') {
            GLOBAL[mod] = require(mod);
        }

        // Contains 'key' : 'lib'
        else if (typeof mod == 'object') {
            for (var _name in mod) {
                GLOBAL[_name] = require(mod[_name]);
            }
        }

    });

}