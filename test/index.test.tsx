import React from 'react'
import ReactDOM from 'react-dom'
import SEO from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <SEO
        title={`title`}
        titleTemplate={`siteName`}
        description={`description` || 'nothin’'}
        image={`image`}
        pathname={`siteUrl`}
        siteLanguage={`siteLanguage`}
        siteLocale={`siteLocale`}
        twitterUsername={`twitterUsername`}
      />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
