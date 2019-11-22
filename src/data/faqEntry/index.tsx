import * as R from 'ramda'
import { Locale, getTranslation, TranslationCollection } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './faq.json'

export interface FAQPage {
  headline: string
  subheadline: string
  metaTitle: string
  metaDescription: string
  faqEntries: FAQEntry[]
}

const faq: TranslationCollection<FAQPage> = data

export interface FAQEntry {
  question: string
  answer: string
}

export const getFAQPage = (locale: Locale): FAQPage =>
  getTranslation(locale)(faq)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)

export const hasFAQEntries: (faqPage: FAQPage) => boolean = R.pipe<
  FAQPage,
  FAQEntry[],
  number,
  boolean
>(R.prop('faqEntries'), R.length, R.lte(1))
