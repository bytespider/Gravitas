# Gravitas
Gravitas is a Gravitar component for Appcelerator Titanium. Simple and easy way 
to load the Gravitar associated with an email address.

Released under the MIT. Please see licence in the project root folder for more
information.

##Usage

```javascript
var Gravitas = require("modules/gravatar");

var win = Ti.UI.createWindow();
var image = Gravitas.createGravatar({
	email: "rob@bytespider.eu",
	defaultStyle: Gravitas.GRAVITAR_DEFAULT_RETRO,
	size: 256,
	rating: Gravitas.GRAVITAR_RATING_PG
});

win.add(image);
win.open();
```

## Authors

  * Rob Griffiths (rob AT bytespider DOT eu) [@bytespider](https://twitter.com/bytespider)