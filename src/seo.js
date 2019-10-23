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
  author,
  datePublished,
  dateModified,
}) => {
  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: pathname,
    headline: description,
    inLanguage: siteLanguage,
    mainEntityOfPage: pathname,
    description: description,
    name: title,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified,
    image: {
      '@type': 'ImageObject',
      url: `${image}`,
    },
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': pathname,
        name: 'Homepage',
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author,
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author,
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${image}`,
        },
      },
      datePublished,
      dateModified,
      description,
      headline: title,
      inLanguage: siteLanguage,
      url,
      name: title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': url,
        name: title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <>
      <Helmet title={title}>
        <html lang={siteLanguage ? siteLanguage : 'en'} />
        <link rel="canonical" href={pathname} />
        <meta name="description" content={description} />
        {!article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaOrgWebPage)}
          </script>
        )}
        {article && (
          <script type="application/ld+json">
            {JSON.stringify(schemaArticle)}
          </script>
        )}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumb)}
        </script>
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