import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { Facebook } from './facebook'
import { Twitter } from './twitter'

export const SEO = ({
  title,
  description,
  pathname,
  article,
  image,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    imageLink: defaultImage,
  } = useSiteMetadata()

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
