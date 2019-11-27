import React from 'react'
import { getHome } from '../../data/home'
import { LocaleProvider, NavbarStateProvider } from '../../utils/hooks'
import Layout from '../../components/layout'
import { ProjectPageComponent } from '../../components/PastProjects/Page'

const FNDPage = () => {
  const { head, projects } = getHome('de')

  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...head}>
          <ProjectPageComponent {...projects[0]} />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default FNDPage
