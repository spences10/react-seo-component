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

| Prop            | Use                | Default      |
| --------------- | ------------------ | ------------ |
| title           | Site title         | ''           |
| description     | Page description   | ''           |
| pathname        | Page URL           | ''           |
| article         | article or website | `website`    |
| image           | image              | ''           |
| siteLanguage    |                    | `en`         |
| siteLocale      |                    | `en_gb`      |
| twitterUsername | can be empty       | ''           |
| author          | can be empty       | ''           |
| datePublished   | ISO date string    | `Date.now()` |
| dateModified    | ISO date string    | `Date.now()` |

## Thanks

Thanks to @LekoArts for the initial components detailed in his Gatsby
Prismic starter.

## Resources

https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9

https://github.com/recraftrelic/dummy-react-npm-module/blob/master/package.json

```

```
