import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Tokenomics.scss';

// Import Background Image
// import Img1 from '../assets/images/about/img-1.png';
// import Img2 from '../assets/images/about/img-2.png';

//import icon
import FeatherIcon from 'feather-icons-react';

export default class About extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { aboutData } = this.props;


    return (
      <React.Fragment>
        <section className='hero-1-bg section' id='about'>
          <div className='stars' id='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={6}></Col>
              <Col lg={6}>
                <div className='mb-5'>
                  <h2 className='text-gradient'>
                    {' '}
                    {aboutData &&
                      aboutData.dynamic_data &&
                      aboutData.dynamic_data.title}
                  </h2>
                  <p className='text-white'>
                    {aboutData &&
                      aboutData.dynamic_data &&
                      aboutData.dynamic_data.description}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}></Col>
              <Col lg={6}>
                <h2 className='font-weight-normal line-height-1_4 mb-4 text-gradient-title'>
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.title_1}
                </h2>
                <p className='text-white mb-4'>
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.description_1}
                </p>
                <p className='f-17 text-white'>
                  <FeatherIcon
                    className='icon-xs text-gradient icon-fill-primary icon mr-2'
                    icon='grid'
                  />{' '}
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.description_2}
                </p>
                <p className='f-17 text-white'>
                  <FeatherIcon
                    className='icon-xs text-gradient icon-fill-primary icon mr-2'
                    icon='layout'
                  />{' '}
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.description_3}
                </p>
                <p className='f-17 text-white mb-4'>
                  <FeatherIcon
                    className='icon-xs text-gradient  icon mr-2'
                    icon='monitor'
                  />{' '}
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.description_4}
                </p>
                <Link to='#' className='read-more f-18 text-gradient'>
                  {aboutData &&
                    aboutData.dynamic_data &&
                    aboutData.dynamic_data.button_name}{' '}
                  <span className='ml-2 right-icon f-24'>&#8594;</span>
                </Link>
              </Col>
              {/* <Col lg={4}>
                <div className='card border-0'>
                  <div className='bg-soft-primary about-img rounded'>
                    <img
                      src={Img1}
                      alt=''
                      className='img-fluid d-block mx-auto'
                    />
                  </div>
                  <div className='mt-3'>
                    <p className='text-uppercase text-white mb-2 f-13'>
                      Development
                    </p>
                    <h4 className='f-18'>Product Development</h4>
                    <p className='text-white'>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit sed quia consequuntur magni.
                    </p>
                    <Link to='#' className='read-more'>
                      Read More <span className='ml-2 right-icon'>&#8594;</span>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className='card border-0'>
                  <div className='bg-soft-info about-img rounded'>
                    <img
                      src={Img2}
                      alt=''
                      className='img-fluid d-block mx-auto'
                    />
                  </div>
                  <div className='mt-3'>
                    <p className='text-uppercase text-white mb-2 f-13'>
                      Marketing
                    </p>
                    <h4 className='f-18'>Marketing Product</h4>
                    <p className='text-white'>
                      Temporibus autem quibusdam a officiis debitis aut rerum
                      necessitatibus saepe eveniet ut et voluptates repudiandae.
                    </p>
                    <Link to='#' className='read-more'>
                      Read More <span className='ml-2 right-icon'>&#8594;</span>
                    </Link>
                  </div>
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
