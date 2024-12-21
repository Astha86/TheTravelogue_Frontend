import React from 'react'
import {Container,Row, Col} from 'reactstrap'
import Subtitle from '../shared/Subtitle'
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'


const Gallery = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col lg="12">
          <Subtitle subtitle={"Gallery"}/>
          <h2 className="gallery__title">
           Our Customers Tour Gallery
          </h2>
        </Col>
        <Col lg="12">
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  )
}

export default Gallery