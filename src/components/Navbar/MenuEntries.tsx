import { HistoryLocation } from '@reach/router'
import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import { NavItem, NavLink } from 'reactstrap'

import { useLocale, useLocation, usePathPrefix } from '../../utils/hooks'

export const MenuEntries: FunctionComponent<{
  linkTag: any
  showFAQ: boolean
  contactLinkText: string
  FAQLinkText: string
}> = ({
  linkTag,
  showFAQ,
  contactLinkText = 'KONTAKT',
  FAQLinkText = 'FAQ',
}) => {
  const FAQPath = usePathPrefix('/faq')
  const contactPath = usePathPrefix('/#contact')
  return (
    <>
      {[
        <NavItem key="contact">
          <NavLink href={contactPath}>{contactLinkText}</NavLink>
        </NavItem>,
        <NavItem key="faq" className={showFAQ ? '' : 'd-none'}>
          <NavLink to={FAQPath} tag={linkTag}>
            {FAQLinkText}
          </NavLink>
        </NavItem>,
        <NavItem key="languageSwitcher">
          <LanguageSwitcher linkTag={linkTag} />
        </NavItem>,
      ]}
    </>
  )
}

const LanguageSwitcher: FunctionComponent<{ linkTag: any }> = ({ linkTag }) => {
  const locale = useLocale()
  const { location } = useLocation()
  const toPrefix = locale === 'en' ? '/de' : '/en'
  const linkText = locale === 'en' ? 'DE' : 'EN'
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  const to = R.pipe<HistoryLocation, string, string>(
    R.prop('pathname'),
    R.replace(currentPrefix, toPrefix),
  )(location)
  return (
    <NavLink to={to} tag={linkTag}>
      {linkText}
    </NavLink>
  )
}
