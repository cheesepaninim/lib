(function(globals) {
    'use strict';

    // TODO: 이름 수정
    let plib;
    
    plib.argsType = require('./js/argsType');
    plib.convention = require('./js/convention');
    plib.typeCheck = require('./js/typeCheck');

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
