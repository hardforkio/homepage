import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { HomeData, useHome } from '../../data/home'
import Layout from '../layout'

export const HomePageTemplate: FunctionComponent<HomeData> = ({
  title,
  heading,
  offerings,
  contactHeadline,
  contactDescription,
  emailButton,
  contactEmail,
  metaDescription,
}) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <>
      <HeroSection title={title} heading={heading} />
      <section
        className={cn(styles.avoidOverlapWithStickyHeader)}
        id="offerings"
      >
        <Offerings offerings={offerings} />
      </section>
      <section id="contact">
        <CallToAction
          headline={contactHeadline}
          description={contactDescription}
          url={contactEmail}
          buttonLabel={emailButton}
        />
      </section>
    </>
  </div>
)

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  return (
    <Layout title={data.metaTitle}>
      <HomePageTemplate {...data} />
    </Layout>
  )
}
