import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

export const SEO = ({
  title,
  description,
  pathname,
  article,
  image,
}) => {
  const imagePath = `${siteUrl}${
    image.publicURL ? 'undefined' : defaultImage
  }`

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || '/'}`,
    image: `${imagePath || defaultImage}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <link rel="canonical" href={seo.url} />
        <meta name="description" content={seo.description} />
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={siteLocale}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitterUsername}
      />
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

const Facebook = ({ url, type, title, desc, image, locale }) => (
  <Helmet>
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
  </Helmet>
)

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
}

Facebook.defaultProps = {
  type: 'website',
  name: null,
}

const Twitter = ({ type, username, title, desc, image }) => (
  <Helmet>
    {username && <meta name="twitter:creator" content={username} />}
    <meta name="twitter:card" content={type} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
)

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
}
