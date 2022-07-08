import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Tokenomics.scss';
class MediaPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'v-pills-work',
    };
    this.toggleTab = this.toggleTab.bind(this);
  }
  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    const { mediaPartnerData } = this.props;
    return (
      <React.Fragment>
        <section className='section' id='features'>
          <div className='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={6}></Col>
              <Col lg={6}>
                <div className='text-left mb-5'>
                  <h2 className='text-gradient'>
                    {mediaPartnerData &&
                      mediaPartnerData.dynamic_data &&
                      mediaPartnerData.dynamic_data.title}
                  </h2>
                  <p className='text-white'>
                    {mediaPartnerData &&
                      mediaPartnerData.dynamic_data &&
                      mediaPartnerData.dynamic_data.description}
                  </p>
                </div>
              </Col>
            </Row>
            <div className='features-content text-white'>
              <Row className='aling-items-center text-white'>
                <Col lg={6}> </Col>
                <Col lg={6}>
                  <Row className='mb-3'>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto '
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                    <Col lg={3} md={3} xl={3} className='text-white'>
                      <img
                        src={
                          mediaPartnerData &&
                          mediaPartnerData.dynamic_data &&
                          mediaPartnerData.dynamic_data.image
                        }
                        alt=''
                        className='img-fluid d-block mx-auto'
                        width={134}
                        height={49}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default MediaPartner;
