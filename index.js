"use strict";
module.exports = function (libs) {

    // Protect libs
    if(!libs || typeof libs === 'undefined') return;

    // Arrayize 'libs'
    if(typeof libs === 'string') libs = [libs];
    else if(typeof libs === 'object' && typeof libs.length !== 'number') libs = [libs];

    // Walk over libs and load them as global
    libs.forEach(function (mod) {

        // Lib will be named as his filename
        if(typeof mod === 'string') {
            GLOBAL[mod] = require(mod);
        }

        // Contains 'key' : 'lib'
        else if(typeof mod === 'object') {
            for(var _name in mod) {
                GLOBAL[_name] = (typeof mod[_name] === 'string') ? require(mod[_name]) : mod[_name];
            }
        }

    });

};
