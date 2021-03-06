import React, { FunctionComponent, useEffect } from 'react'
import ReactMarkdown from 'react-commonmark'
import { Badge, Col, Container, Row } from 'reactstrap'

import { ProjectData } from '../../../data/project/types'
import { Technology } from '../../../data/technology/types'
import { mapToComponent } from '../../../utils/helpers'
import { useNavbarState } from '../../../utils/hooks'
import { CMSImage } from '../../CMSImage'
import helperStyles from '../../helper.module.scss'

export const ProjectPageComponent: FunctionComponent<ProjectData> = ({
  client,
  product,
  application,
  usedTechnologies,
  responsibilities,
  image,
}) => {
  const [, setTransparent] = useNavbarState()
  useEffect(() => setTransparent(false))

  return (
    <Container className={helperStyles.detailPagePadding}>
      <div className="text-center mb-5">
        <h2>{client}</h2>
        <h5>{product}</h5>
      </div>
      {image && (
        <CMSImage className={'mb-5'} alt={`Screens ${client}`} src={image} />
      )}
      <Row className="justify-content-center ">
        <Col xs={12} md={6} className="pb-5">
          <h5>Applications</h5>
          <ReactMarkdown source={application} containerTagName="p" />
          <h5>Responsibilities</h5>
          <ReactMarkdown source={responsibilities} containerTagName="p" />
        </Col>
        <Col xs={12} md={6} className="pb-5">
          <h5>Technologies</h5>
          <ul className="list-inline">
            {mapToComponent(TechTag, usedTechnologies)}{' '}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

const TechTag: FunctionComponent<Technology> = ({ name, link }) => (
  <li className="list-inline-item">
    <Badge href={link} color="info" className="mx-2" pill>
      {name}
    </Badge>
  </li>
)
