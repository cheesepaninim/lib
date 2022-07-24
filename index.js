(function(globals) {
    'use strict'

    let chsp;
    
    chsp.argsType = require('./js/argsType');
    chsp.convention = require('./js/convention');
    chsp.typeCheck = require('./js/typeCheck');
    chsp.pathAndValue = require('./js/pathAndValue');
    chsp.waterfall = require('./js/waterfall');

    // async-waterfall 참고
    if (typeof define !== 'undefined' && define.amd) {
        define([], function () {
            return chsp;
        }); // RequireJS
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = chsp; // CommonJS
    } else {
        globals.chsp = chsp; // <script>
    }
})(this);
