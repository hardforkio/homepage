import React, { FunctionComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import cn from 'classnames'

import { SafeExternalLink } from '../Link'
import styles from './CallToAction.module.scss'

export interface CallToActionProps {
  headline: string
  description: string
  Link?: any
  buttonLabel: string
  url: string
}

const CallToAction: FunctionComponent<CallToActionProps> = ({
  headline,
  description,
  Link = SafeExternalLink,
  buttonLabel,
  url,
}) => (
  <div className={cn(styles.backgroundImg, 'text-center', 'py-md-5')}>
    <Container>
      <Row className="py-5">
        <Col md={8} className="text-md-left">
          <header>
            <h2 className={cn(styles.blockLetters, 'mb-4')}>{headline}</h2>
            <p>{description}</p>
          </header>
        </Col>
        <Col md={4} className="align-self-center">
          <Link
            className="btn btn-primary text-uppercase text-white text-nowrap px-5 mx-2"
            to={url}
          >
            {buttonLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)

export default CallToAction
