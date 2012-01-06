var GRAVATAR_URL = "https://secure.gravatar.com/avatar";

var GRAVATAR_DEFAULT_404        = "404";
var GRAVATAR_DEFAULT_OUTLINE    = "mm";
var GRAVATAR_DEFAULT_GEOMETRIC  = "identicon";
var GRAVATAR_DEFAULT_MONSTER    = "monsterid";
var GRAVATAR_DEFAULT_FACES      = "wavater";
var GRAVATAR_DEFAULT_RETRO      = "retro";
var GRAVATAR_DEFAULT_CUSTOM     = "custom";

var GRAVATAR_RATING_G   = "g";
var GRAVATAR_RATING_PG  = "pg";
var GRAVATAR_RATING_R   = "r";
var GRAVATAR_RATING_X   = "x";

function createGravatar(options)
{
    var md5 = Ti.Utils.md5HexDigest(options.email),
        url = GRAVATAR_URL + "/" + md5,
        style = options.defaultStyle || GRAVATAR_DEFAULT_GEOMETRIC,
        rating = options.rating || GRAVATAR_RATING_G,
        size = options.size || 80,
        ext = ( "extention" in options && options.extention === true ) ? ".jpg" : "",
        hires = "hires" in options && options.hires === true,
        default_image = options.defaultImage || "",
        image;

    if ( style === GRAVATAR_DEFAULT_CUSTOM )
    {
        style = GRAVATAR_DEFAULT_404;
    }

    url += "?d=" + style;
    url += "&r=" + rating;
    url += "&s=" + size;
        
    image = Ti.UI.createImageView
    ({
        image: url,
        defaultImage: default_image,
        hires: hires,
        width: size,
        height: size
    });

    return image;
}

exports.createGravatar = createGravatar;

exports.GRAVATAR_DEFAULT_404        = "404";
exports.GRAVATAR_DEFAULT_OUTLINE    = "mm";
exports.GRAVATAR_DEFAULT_GEOMETRIC  = "identicon";
exports.GRAVATAR_DEFAULT_MONSTER    = "monsterid";
exports.GRAVATAR_DEFAULT_FACES      = "wavater";
exports.GRAVATAR_DEFAULT_RETRO      = "retro";
exports.GRAVATAR_DEFAULT_CUSTOM     = "custom";

exports.GRAVATAR_RATING_G   = "g";
exports.GRAVATAR_RATING_PG  = "pg";
exports.GRAVATAR_RATING_R   = "r";
exports.GRAVATAR_RATING_X   = "x";