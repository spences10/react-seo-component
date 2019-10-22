"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEO = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SEO = function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      pathname = _ref.pathname,
      article = _ref.article,
      image = _ref.image,
      siteLanguage = _ref.siteLanguage,
      siteLocale = _ref.siteLocale,
      twitterUsername = _ref.twitterUsername;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_reactHelmet["default"], {
    title: title
  }, _react["default"].createElement("html", {
    lang: siteLanguage ? siteLanguage : 'en'
  }), _react["default"].createElement("link", {
    rel: "canonical",
    href: pathname
  }), _react["default"].createElement("meta", {
    name: "description",
    content: description
  })), _react["default"].createElement(Facebook, {
    desc: description,
    image: image,
    title: title,
    type: article ? 'article' : 'website',
    url: pathname,
    locale: siteLocale ? siteLocale : 'en_gb'
  }), _react["default"].createElement(Twitter, {
    title: title,
    image: image,
    desc: description,
    username: twitterUsername
  }));
};

exports.SEO = SEO;
SEO.propTypes = {
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string
};

var Facebook = function Facebook(_ref2) {
  var url = _ref2.url,
      type = _ref2.type,
      title = _ref2.title,
      desc = _ref2.desc,
      image = _ref2.image,
      locale = _ref2.locale;
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

var Twitter = function Twitter(_ref3) {
  var type = _ref3.type,
      username = _ref3.username,
      title = _ref3.title,
      desc = _ref3.desc,
      image = _ref3.image;
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
