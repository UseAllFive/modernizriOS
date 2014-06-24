/*
# modernizriOS

Brought to you by [Use All Five, Inc.](http://www.useallfive.com)

```
Author: Bret Morris <bret@useallfive.com>
Author URI: [http://www.useallfive.com](http://www.useallfive.com)
Repository: https://github.com/UseAllFive/modernizriOS
```

Modernizr tests for iOS devices.
 */

// ## Factory
// Be compatible with requirejs.
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['modernizr'], factory);
    } else {
        // Use browser globals. Will fail if they are not yet loaded.
        /* globals Modernizr */
        factory(Modernizr);
    }
}(function(Modernizr) {
    // iPad
    Modernizr.addTest('ipad', function() {
        return !!navigator.userAgent.match(/iPad/i);
    });
    // iPhone
    Modernizr.addTest('iphone', function() {
        return !!navigator.userAgent.match(/iPhone/i);
    });
    // iPod
    Modernizr.addTest('ipod', function() {
        return !!navigator.userAgent.match(/iPod/i);
    });
    // iOS
    Modernizr.addTest('appleios', function() {
        return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
    });
    return Modernizr;
}));
