import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Img1 from '../assets/images/blog/img-1.jpg';
import './Tokenomics.scss';
export default class News extends Component {
  render() {
    return (
      <React.Fragment>
        <section className='section bg-light' id='whitepaper'>
          <div className='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={7}>
                <div className='text-center mb-5'>
                  <h2 className='text-white'>Latest News</h2>
                  <p className='text-white'>
                    Ut enim ad minima veniam quis nostrum exercitationem ullam
                    corporis suscipit laboriosam nisi commodi consequatur.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div className='blog-box mb-4 mb-lg-0'>
                  <img
                    src={Img1}
                    alt=''
                    className='img-fluid d-block mx-auto rounded shadow'
                  />
                </div>
              </Col>
              <Col lg={6}>
                <p className='text-white mb-4 pb-3'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione sequinesciunt.
                </p>
                <p className='text-white mb-4 pb-3'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione sequinesciunt.
                </p>
                <p className='text-white mb-4 pb-3'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione sequinesciunt.
                </p>
                <p className='text-white mb-4 pb-3'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione sequinesciunt.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
