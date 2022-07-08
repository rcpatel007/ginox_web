import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import avatar from '../assets/images/avatar-2.jpg';
import './Tokenomics.scss';

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { teamData } = this.props;
    return (
      <React.Fragment>
        <section className='section' id='team'>
          <div className='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={4}></Col>
              <Col lg={8}>
                <div className='text-center mb-5'>
                  <h2 className='text-gradient'>
                    {teamData &&
                      teamData.dynamic_data &&
                      teamData.dynamic_data.title}
                  </h2>
                  <p className='text-white'>
                    {teamData &&
                      teamData.dynamic_data &&
                      teamData.dynamic_data.description}
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col md={10}>
                <Row>
                  {/* <Col lg={4}></Col> */}
                  {/* <Col xl={4} lg={4} md={6} sm={12}>
                    <div className='team-main mt-0'>
                      <div class='item '>
                        <div class='img position-relative'>
                          <div class='name-post'>
                            <img
                              src={avatar}
                              width='100'
                              height='100'
                              alt='avatar'
                              class='mb-3 entered lazyloaded'
                              data-lazy-src={avatar}
                              data-ll-status='loaded'
                            />
                            <noscript>
                              <img
                                src={avatar}
                                width='100'
                                height='100'
                                alt='avatar'
                                class=' mb-3'
                              />
                            </noscript>
                            <h3 class=''>Shantilal Matariya</h3>
                            <p class=' mb-3'>Chief Executive Officer</p>
                            <p class='bio '>
                              With 7+ years of experience as a software engineer
                              in the IT field, an Elite in Back-end development,
                              DevOps, and Project &amp; Team Management.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col> */}
                  <Col xl={4} lg={4} md={6} sm={12} className='mb-5'>
                    <div className='team-main mt-0'>
                      <div className='item '>
                        <div className='img position-relative'>
                          <div className='name-post'>
                            <img
                              src={avatar}
                              width='100'
                              height='100'
                              alt='avatar'
                              className='mb-3 entered lazyloaded'
                              data-lazy-src={avatar}
                              data-ll-status='loaded'
                            />
                            <noscript>
                              <img
                                src={avatar}
                                width='100'
                                height='100'
                                alt='avatar'
                                className=' mb-3'
                              />
                            </noscript>
                            <h3 className='text-gradient-title'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_1_title}
                            </h3>
                            <p className='text-white mb-3'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_1_description_1}
                            </p>
                            <p className='bio text-white'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_1_description_2}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={6} sm={12} className='mb-5'>
                    <div className='team-main mt-0'>
                      <div className='item '>
                        <div className='img position-relative'>
                          <div className='name-post'>
                            <img
                              src={avatar}
                              width='100'
                              height='100'
                              alt='avatar'
                              className='mb-3 entered lazyloaded'
                              data-lazy-src={avatar}
                              data-ll-status='loaded'
                            />
                            <noscript>
                              <img
                                src={avatar}
                                width='100'
                                height='100'
                                alt='avatar'
                                className=' mb-3'
                              />
                            </noscript>
                            <h3 className='text-gradient-title'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_title}
                            </h3>
                            <p className='text-white mb-3'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_description_1}
                            </p>
                            <p className='bio text-white'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_description_2}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={6} sm={12} className='mb-5'>
                    <div className='team-main mt-0'>
                      <div className='item '>
                        <div className='img position-relative'>
                          <div className='name-post'>
                            <img
                              src={avatar}
                              width='100'
                              height='100'
                              alt='avatar'
                              className='mb-3 entered lazyloaded'
                              data-lazy-src={avatar}
                              data-ll-status='loaded'
                            />
                            <noscript>
                              <img
                                src={avatar}
                                width='100'
                                height='100'
                                alt='avatar'
                                className=' mb-3'
                              />
                            </noscript>
                            <h3 className='text-gradient-title'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_title}
                            </h3>
                            <p className='text-white mb-3'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_description_1}
                            </p>
                            <p className='bio text-white'>
                              {teamData &&
                                teamData.dynamic_data &&
                                teamData.dynamic_data.card_2_description_2}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <Row>
              <Col lg={12}>
                <div
                  id='testi-clients'
                  className='owl-carousel owl-theme testi-content'
                >
                  <Slider {...settings}>{slides}</Slider>
                </div>
              </Col>
            </Row> */}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
