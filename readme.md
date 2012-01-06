# Gravitas
Gravitas is a Gravitar component for Appcelerator Titanium. Simple and easy way 
to load the Gravitar associated with an email address.

Released under the MIT. Please see licence in the project root folder for more
information.

##Usage

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

##Methods
###createGravatar

options

* email - [`string`] the email address of the user
* defaultStyle - [`string`] the style of defeault images when the user email doesn't exist (_default images styles constant_)
* rating - [`string`] the rating of the image to display (_image ratings constant_)
* size - [`int`] size of the image to load
* ext - [`bool`] whether to include the `.jpg` extention (not usually needed)
* defaultImage - [`string`] url or path to the default image

###Constants
	// Default image styles
    Gravitas.DEFAULT_STYLE_404 			// returns 404 response
	Gravitas.DEFAULT_STYLE_OUTLINE 		// portrait outline
	Gravitas.DEFAULT_STYLE_GEOMETRIC 	// geometric image (default)
	Gravitas.DEFAULT_STYLE_MONSTER 		// monsters
	Gravitas.DEFAULT_STYLE_FACES 		// cartoon faces
	Gravitas.DEFAULT_STYLE_RETRO 		// 8bit style image
	Gravitas.DEFAULT_STYLE_CUSTOM 		// will use the image you supply in defaultImage

	Gravitas.DEFAULT_STYLE_ROBOHASH 	// robohash.org generated default

	// Image ratings
	Gravitas.RATING_G 					// Allow G rated images or better (default)
	Gravitas.RATING_PG 					// Allow PG rated images or better
	Gravitas.RATING_R 					// Allow R rated images or better
	Gravitas.RATING_X 					// Allow X rated images or better


## Authors

  * Rob Griffiths (rob AT bytespider DOT eu) [@bytespider](https://twitter.com/bytespider)