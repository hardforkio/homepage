import CMS, { init } from 'netlify-cms-app'
import '../scss/main.scss'
import { ImprintPreview } from './preview-templates/ImprintPreview'
import { FAQPreview } from './preview-templates/FAQPreview'
import { FooterPreview } from './preview-templates/FooterPreview'
import { HomePreview } from './preview-templates/HomePreview'
import { NavbarPreview } from './preview-templates/NavbarPreview'
import { ProjectPreview } from './preview-templates/ProjectPreview'
import { LocalizedStringWidget } from './widgets/LocalizedString'
import { UuidWidget } from './widgets/Uuid'
import { LOCALES } from './i18n'
import { LocalizedMarkdownWidget } from './widgets/LocalizedMarkdown'
import { LocalizedObjectWidget } from './widgets/LocalizedObject'

const config = {
  backend: {
    name: 'git-gateway',
    repo: 'hardforkio/homepage',
    branch: process.env.GATSBY_CMS_BRANCH,
  },
}

CMS.registerWidget(LocalizedMarkdownWidget(LOCALES))
CMS.registerWidget(LocalizedStringWidget(LOCALES))
CMS.registerWidget(LocalizedObjectWidget(LOCALES))
CMS.registerWidget(UuidWidget())

CMS.registerPreviewTemplate('imprint', ImprintPreview)
CMS.registerPreviewTemplate('faq', FAQPreview)
CMS.registerPreviewTemplate('home', HomePreview)
CMS.registerPreviewTemplate('footer', FooterPreview)
CMS.registerPreviewTemplate('navbar', NavbarPreview)
CMS.registerPreviewTemplate('project', ProjectPreview)

init({ config })
