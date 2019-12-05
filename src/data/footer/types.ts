import { TranslationCollection } from '../../cms/i18n'

export interface FooterData {
  imprintLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

export interface FooterDataOnDisk {
  imprintLinkText?: TranslationCollection<string>
  githubLinkURL?: string
  contactEmail?: string
  copyrightText?: string
}