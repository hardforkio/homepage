import React, { FC } from 'react'
import Layout from '../../components/layout'
import { NavbarStateProvider, LocaleProvider } from '../../utils/hooks'
import { TitleBanner } from '../../components/TitleBanner'
import { Container } from 'reactstrap'
import data from '../../components/powertools/privacy-policy.html'

const banner = {
  title: 'Dateschutzerklärung',
  subtitle: 'Powertools Extension',
}

const seo = {
  title: 'Hardfork GmbH - Powertools Datenschutzerklärung',
  meta: {
    description: 'Datenschutzerklärung der Powertools Extension',
    keywords: 'Datenschutz, Powertools, Hardfork',
  },
}

const PrivacyPolicy: FC = () => (
  <div dangerouslySetInnerHTML={{ __html: data }}></div>
)

const PrivacyPolicyPage: FC = () => {
  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo}>
          <TitleBanner {...banner} />
          <Container className="p-5">
            <PrivacyPolicy />
          </Container>
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default PrivacyPolicyPage
