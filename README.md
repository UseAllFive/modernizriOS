# modernizriOS

Brought to you by [Use All Five, Inc.](http://www.useallfive.com)

```
Author: Bret Morris <bret@useallfive.com>
Author URI: [http://www.useallfive.com](http://www.useallfive.com)
Repository: https://github.com/UseAllFive/modernizriOS
```

Modernizr tests for iOS devices.

### To Use
Include this file after Modernizr. 

These tests will add classes to the `HTML` tag. For example:

```HTML
<html class="no-ipad iphone no-ipad appleios"></html>
```

These tests can also be accessed with JavaScript:

```JavaScript
// Device is an iOS device
if (Modernizr.appleios) {	
	...
}
```


