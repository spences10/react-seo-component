# React SEO Component

[![CodeFactor](https://www.codefactor.io/repository/github/spences10/react-seo-component/badge)](https://www.codefactor.io/repository/github/spences10/react-seo-component)
![bundlephobia min](https://badgen.net/bundlephobia/min/react-seo-component)
![bundlephobia minzip](https://badgen.net/bundlephobia/minzip/react)

Use it for adding canonical links, metadata and OpenGraph information
to your React projects!

## Use it!

Install it from npm!

```bash
yarn add react-seo-component
# peer dependency of react helmet
yarn add react-helmet
```

If you are using it with Gatsby you will also need to install the
Gatsby plugin:

```bash
yarn add react-seo-component
yarn add react-helmet
yarn add gatsby-plugin-react-helmet
# or in one command
yarn add react-seo-component react-helmet gatsby-plugin-react-helmet
```

This will create the meta tags at build time.

**Examples:**

For an index page:

```jsx
<SEO
  title={title}
  titleTemplate={siteName}
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
  titleTemplate={siteName}
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

## Props

| Prop            | Type                    | Default      |
| --------------- | ----------------------- | ------------ |
| title           | Page title              | ''           |
| titleTemplate   | Page Title + Site title | ''           |
| description     | Page description        | ''           |
| pathname        | Full Page URL           | ''           |
| article         | `article` or `website`  | `website`    |
| image           | Full image URL          | ''           |
| siteLanguage    | Content Language        | `en`         |
| siteLocale      | Content Locale          | `en_gb`      |
| twitterUsername | can be empty            | ''           |
| author          | can _not_ be empty      | 'J Doe'      |
| datePublished   | ISO date string         | `Date.now()` |
| dateModified    | ISO date string         | `Date.now()` |

## To test locally

Use `npm pack` or `yarn pack` to create a `.tgz` of the project you
can install locally on your project to test with.

```bash
# from here
yarn pack
# copy to project to test
cp react-seo-component-2.0.1.tgz ../project-to-test-with/
# ~/project-to-test-with
yarn add file:react-seo-component-2.0.1.tgz
```

## Thanks:

- **[LekoArts]** for the initial components detailed in his Gatsby
  [Prismic starter].

- **[Leigh Halliday]** for the [primer video] on using [TSDX]

- **[Jared Palmer]** for [TSDX]

## Resources

https://medium.com/recraftrelic/building-a-react-component-as-a-npm-module-18308d4ccde9

https://github.com/recraftrelic/dummy-react-npm-module/blob/master/package.json

<!-- Links -->

[lekoarts]: https://github.com/LekoArts
[prismic starter]: https://github.com/LekoArts/gatsby-starter-prismic
[jared palmer]: https://github.com/jaredpalmer
[leigh halliday]: https://github.com/leighhalliday
[tsdx]: https://github.com/jaredpalmer/tsdx
[primer video]: https://www.youtube.com/watch?v=V3XZYC8zmvo
