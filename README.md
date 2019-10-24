# A `react-seo-component`

Use it for adding canonical links, metadata and OpenGraph information
to your react projects!

## Use it!

Install it from npm!

```bash
yarn add react-seo-component
```

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

| Prop            | Use                     |
| --------------- | ----------------------- |
| title           | Site title              |
| description     | Page description        |
| pathname        | Page URL                |
| article         | article                 |
| image           | image                   |
| siteLanguage    | defaults to 'en'        |
| siteLocale      | defaults to 'en_gb'     |
| twitterUsername | can be empty            |
| author          | can be empty            |
| datePublished   | default to current date |
| dateModified    | default to current date |

## Thanks

Thanks to @LekoArts for the initial components detailed in his Gatsby
Prismic starter.

## Resources

https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9

https://github.com/recraftrelic/dummy-react-npm-module/blob/master/package.json

```

```
