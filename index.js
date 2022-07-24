(function(globals) {
    'use strict'

    let plib;
    
    plib.argsType = require('./js/argsType');
    plib.convention = require('./js/convention');
    plib.typeCheck = require('./js/typeCheck');
    plib.pathAndValue = require('./js/pathAndValue');
    plib.waterfall = require('./js/waterfall');

    // async-waterfall 참고
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return plib;
        }); // RequireJS
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = plib; // CommonJS
    } else {
        globals.plib = plib; // <script>
    }
})(this);
