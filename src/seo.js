import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import { Facebook } from './facebook'
import { Twitter } from './twitter'

export const SEO = ({
  title,
  description,
  pathname,
  article,
  image,
  siteLanguage,
  siteLocale,
  twitterUsername,
}) => {
  return (
    <>
      <Helmet title={title}>
        <html lang={siteLanguage ? siteLanguage : 'en'} />
        <link rel="canonical" href={pathname} />
        <meta name="description" content={description} />
      </Helmet>
      <Facebook
        desc={description}
        image={image}
        title={title}
        type={article ? 'article' : 'website'}
        url={pathname}
        locale={siteLocale ? siteLocale : 'en_gb'}
      />
      <Twitter
        title={title}
        image={image}
        desc={description}
        username={twitterUsername}
      />
    </>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  article: PropTypes.string,
  image: PropTypes.string,
  siteLanguage: PropTypes.string,
  siteLocale: PropTypes.string,
  twitterUsername: PropTypes.string,
}
