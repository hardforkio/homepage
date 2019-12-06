import React, { FunctionComponent } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Link } from 'gatsby'
import { Head as HeadProps } from '../data/head/types'
import { Head } from './Head'

const Layout: FunctionComponent<HeadProps> = ({ children, title, meta }) => (
  <div>
    <Head title={title} meta={meta} />
    <header>
      <Navbar linkTag={Link} className="fixed-top" />
    </header>
    <main>{children}</main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Layout
