import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Tokenomics.scss';

class Investors extends Component {
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
    const { investorData } = this.props;
    return (
      <React.Fragment>
        <section className='section' id='investors'>
          <div className='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={6}></Col>
              <Col lg={6}>
                <div className='text-left mb-5'>
                  <h2 className='text-gradient'>
                    {investorData &&
                      investorData.dynamic_data &&
                      investorData.dynamic_data.title}
                  </h2>
                  <p className='text-white'>
                    {investorData &&
                      investorData.dynamic_data &&
                      investorData.dynamic_data.description}
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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
                          investorData &&
                          investorData.dynamic_data &&
                          investorData.dynamic_data.image
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

export default Investors;
