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
  return /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("meta", {
    property: "og:locale",
    content: locale
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:url",
    content: url
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:type",
    content: type
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:description",
    content: desc
  }), /*#__PURE__*/React.createElement("meta", {
    property: "og:image",
    content: image
  }), /*#__PURE__*/React.createElement("meta", {
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
  return /*#__PURE__*/React.createElement(Helmet, null, username && /*#__PURE__*/React.createElement("meta", {
    name: "twitter:creator",
    content: username
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:card",
    content: type
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:description",
    content: desc
  }), /*#__PURE__*/React.createElement("meta", {
    name: "twitter:image",
    content: image
  }), /*#__PURE__*/React.createElement("meta", {
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
      titleTemplate = _ref.titleTemplate,
      description = _ref.description,
      pathname = _ref.pathname,
      article = _ref.article,
      image = _ref.image,
      siteLanguage = _ref.siteLanguage,
      siteLocale = _ref.siteLocale,
      twitterUsername = _ref.twitterUsername,
      author = _ref.author,
      datePublished = _ref.datePublished,
      dateModified = _ref.dateModified;
  var seo = {
    title: title.slice(0, 70),
    description: description.slice(0, 160),
    datePublished: datePublished ? null : new Date(Date.now()).toISOString(),
    dateModified: dateModified ? null : new Date(Date.now()).toISOString()
  }; // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  // Structured Data Testing Tool >>
  // https://search.google.com/structured-data/testing-tool

  var schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: pathname,
    headline: seo.description,
    inLanguage: siteLanguage,
    mainEntityOfPage: pathname,
    description: seo.description,
    name: seo.title,
    author: {
      '@type': 'Person',
      name: author
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    datePublished: seo.datePublished,
    dateModified: seo.dateModified,
    image: {
      '@type': 'ImageObject',
      url: "".concat(image)
    }
  }; // Initial breadcrumb list

  var itemListElement = [{
    '@type': 'ListItem',
    item: {
      '@id': pathname,
      name: 'Homepage'
    },
    position: 1
  }];
  var schemaArticle = null;

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: "".concat(image)
        }
      },
      datePublished: seo.datePublished,
      dateModified: seo.dateModified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: pathname,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: image
      },
      mainEntityOfPage: pathname
    }; // Push current blogpost into breadcrumb list

    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': pathname,
        name: seo.title
      },
      position: 2
    });
  }

  var breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement: itemListElement
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Helmet, {
    title: seo.title,
    titleTemplate: "%s | ".concat(titleTemplate)
  }, /*#__PURE__*/React.createElement("html", {
    lang: siteLanguage ? siteLanguage : 'en'
  }), /*#__PURE__*/React.createElement("link", {
    rel: "canonical",
    href: pathname
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: seo.description
  }), !article && /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(schemaOrgWebPage)), article && /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(schemaArticle)), /*#__PURE__*/React.createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify(breadcrumb))), /*#__PURE__*/React.createElement(Facebook, {
    desc: seo.description,
    image: image,
    title: seo.title,
    type: article ? 'article' : 'website',
    url: pathname,
    locale: siteLocale ? siteLocale : 'en_gb'
  }), /*#__PURE__*/React.createElement(Twitter, {
    title: seo.title,
    image: image,
    desc: seo.description,
    username: twitterUsername
  }));
};
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  article: PropTypes.bool,
  image: PropTypes.string,
  siteLanguage: PropTypes.string,
  siteLocale: PropTypes.string,
  twitterUsername: PropTypes.string,
  author: PropTypes.string.isRequired
};
SEO.defaultProps = {
  author: "J Doe"
};

exports.Facebook = Facebook;
exports.Twitter = Twitter;
exports.default = SEO;
