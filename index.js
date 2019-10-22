"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Facebook = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Facebook = function Facebook(_ref) {
  var url = _ref.url,
      type = _ref.type,
      title = _ref.title,
      desc = _ref.desc,
      image = _ref.image,
      locale = _ref.locale;
  return _react["default"].createElement(_reactHelmet["default"], null, _react["default"].createElement("meta", {
    property: "og:locale",
    content: locale
  }), _react["default"].createElement("meta", {
    property: "og:url",
    content: url
  }), _react["default"].createElement("meta", {
    property: "og:type",
    content: type
  }), _react["default"].createElement("meta", {
    property: "og:title",
    content: title
  }), _react["default"].createElement("meta", {
    property: "og:description",
    content: desc
  }), _react["default"].createElement("meta", {
    property: "og:image",
    content: image
  }), _react["default"].createElement("meta", {
    property: "og:image:alt",
    content: desc
  }));
};

exports.Facebook = Facebook;
Facebook.propTypes = {
  url: _propTypes["default"].string.isRequired,
  locale: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  desc: _propTypes["default"].string.isRequired,
  image: _propTypes["default"].string.isRequired,
  name: _propTypes["default"].string
};
Facebook.defaultProps = {
  type: 'website',
  name: null
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Facebook", {
  enumerable: true,
  get: function get() {
    return _facebook.Facebook;
  }
});
Object.defineProperty(exports, "Twitter", {
  enumerable: true,
  get: function get() {
    return _twitter.Twitter;
  }
});
exports["default"] = void 0;

var _facebook = require("./facebook");

var _seo = require("./seo");

var _twitter = require("./twitter");

var _default = _seo.SEO;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEO = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _facebook = require("./facebook");

var _twitter = require("./twitter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SEO = function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      pathname = _ref.pathname,
      article = _ref.article,
      image = _ref.image;
  var imagePath = "".concat(siteUrl).concat(image.publicURL ? 'undefined' : defaultImage);
  var seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: "".concat(siteUrl).concat(pathname || '/'),
    image: "".concat(imagePath || defaultImage)
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactHelmet["default"], {
    title: seo.title
  }, _react["default"].createElement("html", {
    lang: siteLanguage
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: seo.url
  }), _react["default"].createElement("meta", {
    name: "description",
    content: seo.description
  })), _react["default"].createElement(_facebook.Facebook, {
    desc: seo.description,
    image: seo.image,
    title: seo.title,
    type: article ? 'article' : 'website',
    url: seo.url,
    locale: siteLocale
  }), _react["default"].createElement(_twitter.Twitter, {
    title: seo.title,
    image: seo.image,
    desc: seo.description,
    username: twitterUsername
  }));
};

exports.SEO = SEO;
SEO.propTypes = {
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Twitter = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Twitter = function Twitter(_ref) {
  var type = _ref.type,
      username = _ref.username,
      title = _ref.title,
      desc = _ref.desc,
      image = _ref.image;
  return _react["default"].createElement(_reactHelmet["default"], null, username && _react["default"].createElement("meta", {
    name: "twitter:creator",
    content: username
  }), _react["default"].createElement("meta", {
    name: "twitter:card",
    content: type
  }), _react["default"].createElement("meta", {
    name: "twitter:title",
    content: title
  }), _react["default"].createElement("meta", {
    name: "twitter:description",
    content: desc
  }), _react["default"].createElement("meta", {
    name: "twitter:image",
    content: image
  }), _react["default"].createElement("meta", {
    name: "twitter:image:alt",
    content: desc
  }));
};

exports.Twitter = Twitter;
Twitter.propTypes = {
  type: _propTypes["default"].string,
  username: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  desc: _propTypes["default"].string.isRequired,
  image: _propTypes["default"].string.isRequired
};
Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null
};
