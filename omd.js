/**
 * Name: OMD
 * Description: javascript run in amd cmd and node
 * Version: 1.2.0
 * Author: tison <mail@tangshuang.net>
 * Source code: https://github.com/tangshuang/omd
 */

!function(factory){
    "use strict";

    if(typeof define == 'function' && (define.cmd || define.amd)) { // amd & cmd
        define(function(require){
            // --------------- dependencies
            var _require_ = function(name) {
                var requires = {
                    //'jquery' : require('jquery')

                    /** 
                     * relative path like `require('./module')` is not allowed 
                     */
                };
                return requires[name];
            }
            return factory(_require_);
        });
    }
    else if(typeof module !== 'undefined' && typeof exports === 'object') { // nodejs
        module.exports = factory(require);
    }
    else { // none
        window['main'] = factory(function(name){}); // change 'main' to the name of this component
    }
}(function(_require_){ 
    
    // var $ = _require_('jquery');

});
