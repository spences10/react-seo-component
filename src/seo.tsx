import React from 'react'
import { Helmet } from 'react-helmet'
import { Facebook } from './facebook'
import { Twitter } from './twitter'

interface Props {
  title: string
  titleTemplate: string
  titleSeparator?: string
  description: string
  pathname: string
  article?: boolean
  image?: string
  siteLanguage: string
  siteLocale: string
  twitterUsername: string
  author?: string
  datePublished?: string
  dateModified?: string
}

const dateNow = new Date(Date.now()).toISOString()

export const SEO = ({
  title,
  titleTemplate,
  titleSeparator,
  description,
  pathname,
  article = false,
  image,
  siteLanguage,
  siteLocale,
  twitterUsername,
  author = 'J Doe.',
  datePublished = dateNow,
  dateModified = dateNow,
}: Props) => {
  const seo = {
    title: title.slice(0, 70),
    description: description.slice(0, 160),
    datePublished,
    dateModified,
  }

  const copyrightYear = new Date().getFullYear()

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')
  // Structured Data Testing Tool >>
  // https://search.google.com/structured-data/testing-tool

  const schemaOrgWebPage = {
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
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear,
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: seo.datePublished,
    dateModified: seo.dateModified,
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
      copyrightYear,
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
      datePublished: seo.datePublished,
      dateModified: seo.dateModified,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: pathname,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
      mainEntityOfPage: pathname,
    }
    // Push current blog post into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': pathname,
        name: seo.title,
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
      <Helmet
        title={seo.title}
        titleTemplate={`%s ${
          titleSeparator ? titleSeparator : `·`
        } ${titleTemplate}`}
      >
        <html lang={siteLanguage ? siteLanguage : 'en'} />
        <link rel="canonical" href={pathname} />
        <meta name="description" content={seo.description} />

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
      {image && (
        <>
          <Facebook
            desc={seo.description}
            image={image}
            title={seo.title}
            type={article ? 'article' : 'website'}
            url={pathname}
            locale={siteLocale ? siteLocale : 'en_gb'}
          />
          <Twitter
            title={seo.title}
            image={image}
            desc={seo.description}
            username={twitterUsername}
          />
        </>
      )}
    </>
  )
}
