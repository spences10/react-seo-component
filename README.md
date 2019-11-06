# A `react-seo-component`

[![CodeFactor](https://www.codefactor.io/repository/github/spences10/react-seo-component/badge)](https://www.codefactor.io/repository/github/spences10/react-seo-component)

Use it for adding canonical links, metadata and OpenGraph information
to your react projects!

## Use it!

Install it from npm!

```bash
yarn add react-seo-component
```

If you are using it with Gatsby you will need to install
`gatsby-plugin-react-helmet` to have the meta tags generated at build
time.

**Examples:**

For an index page:

```jsx
<SEO
  title={title}
  description={description || 'nothin’'}
  image={image}
  pathname={siteUrl}
  siteLanguage={siteLanguage}
  siteLocale={siteLocale}
  twitterUsername={twitterUsername}
/>
```

For a blog post:

```jsx
<SEO
  title={title}
  description={description}
  image={image}
  pathname={siteUrlPlusSlug}
  siteLanguage={siteLanguage}
  siteLocale={siteLocale}
  twitterUsername={twitterUsername}
  author={authorName}
  article={true}
  publishedDate={createdDate}
  modifiedDate={updatedDate}
/>
```

## Dependencies

Presumes you already have the following installed:

- `prop-types`
- `react`
- `react-helmet`

## Props

| Prop            | Type                   | Default      |
| --------------- | ---------------------- | ------------ |
| title           | Site title             | ''           |
| description     | Page description       | ''           |
| pathname        | Full Page URL          | ''           |
| article         | `article` or `website` | `website`    |
| image           | Full image URL         | ''           |
| siteLanguage    | Content Language       | `en`         |
| siteLocale      | Content Locale         | `en_gb`      |
| twitterUsername | can be empty           | ''           |
| author          | can _not_ be empty     | 'J Doe'      |
| datePublished   | ISO date string        | `Date.now()` |
| dateModified    | ISO date string        | `Date.now()` |

## Thanks

Thanks to [@LekoArts] for the initial components detailed in his
Gatsby [Prismic starter].

## Resources

https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9

https://github.com/recraftrelic/dummy-react-npm-module/blob/master/package.json

<!-- Links -->

[@lekoarts]: https://github.com/LekoArts
[prismic starter]: https://github.com/LekoArts/gatsby-starter-prismic
