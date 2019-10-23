'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var Helmet = _interopDefault(require('react-helmet'));

var Facebook = function Facebook(_ref) {
  var url = _ref.url,
      type = _ref.type,
      title = _ref.title,
      desc = _ref.desc,
      image = _ref.image,
      locale = _ref.locale;
  return React.createElement(Helmet, null, React.createElement("meta", {
    property: "og:locale",
    content: locale
  }), React.createElement("meta", {
    property: "og:url",
    content: url
  }), React.createElement("meta", {
    property: "og:type",
    content: type
  }), React.createElement("meta", {
    property: "og:title",
    content: title
  }), React.createElement("meta", {
    property: "og:description",
    content: desc
  }), React.createElement("meta", {
    property: "og:image",
    content: image
  }), React.createElement("meta", {
    property: "og:image:alt",
    content: desc
  }));
};
Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string
};
Facebook.defaultProps = {
  type: 'website',
  name: null
};

var Twitter = function Twitter(_ref) {
  var type = _ref.type,
      username = _ref.username,
      title = _ref.title,
      desc = _ref.desc,
      image = _ref.image;
  return React.createElement(Helmet, null, username && React.createElement("meta", {
    name: "twitter:creator",
    content: username
  }), React.createElement("meta", {
    name: "twitter:card",
    content: type
  }), React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), React.createElement("meta", {
    name: "twitter:description",
    content: desc
  }), React.createElement("meta", {
    name: "twitter:image",
    content: image
  }), React.createElement("meta", {
    name: "twitter:image:alt",
    content: desc
  }));
};
Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null
};

var SEO = function SEO(_ref) {
  var title = _ref.title,
      description = _ref.description,
      pathname = _ref.pathname,
      article = _ref.article,
      image = _ref.image,
      siteLanguage = _ref.siteLanguage,
      siteLocale = _ref.siteLocale,
      twitterUsername = _ref.twitterUsername;
  return React.createElement(React.Fragment, null, React.createElement(Helmet, {
    title: title
  }, React.createElement("html", {
    lang: siteLanguage ? siteLanguage : 'en'
  }), React.createElement("link", {
    rel: "canonical",
    href: pathname
  }), React.createElement("meta", {
    name: "description",
    content: description
  })), React.createElement(Facebook, {
    desc: description,
    image: image,
    title: title,
    type: article ? 'article' : 'website',
    url: pathname,
    locale: siteLocale ? siteLocale : 'en_gb'
  }), React.createElement(Twitter, {
    title: title,
    image: image,
    desc: description,
    username: twitterUsername
  }));
};
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

exports.Facebook = Facebook;
exports.Twitter = Twitter;
exports.default = SEO;
