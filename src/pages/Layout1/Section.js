import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import hero from '../../assets/images/hero-img.png';

class Section extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
//   componentWillMount(){
//     let el = document.querySelector("#stars1");
        
//     el.addEventListener("mousemove", (e) => {
//     el.style.backgroundPositionX = -e.offsetX + "px";
//     el.style.backgroundPositionY = -e.offsetY + "px";
//     });
//     alert("gllo")
// }
   

  
  openURL(homeData) {
    if (homeData.dynamic_data.button_link !== '') {
      const newWindow = window.open(
        homeData.dynamic_data.button_link,
        '_blank',
        'noopener,noreferrer'
      );
      if (newWindow) newWindow.opener = null;
    } else {
      const newWindow = window.open('#', '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }

  render() {
    const { homeData } = this.props;
    return (
      <React.Fragment>
        <section className='hero-1-bg bg-light' id='home'>
          <div className='stars' id='stars1'></div>
          <Container>
            <Row className='align-items-center justify-content-center'>
              <Col lg={6}>
                {/* <h1 className='display-4 font-weight-medium mb-4 text-white'>
                  Hello,
                </h1> */}
                <h1 className='hero-1-title font-weight-normal text-gradient-title mb-4'>
                  {homeData &&
                    homeData.dynamic_data &&
                    homeData.dynamic_data.title}
                </h1>
                <p className='text-white mb-4 pb-3'>
                  {homeData &&
                    homeData.dynamic_data &&
                    homeData.dynamic_data.description}
                </p>
                {homeData &&
                  homeData.dynamic_data &&
                  homeData.dynamic_data.button_name && (
                    <Link
                      to={'#'}
                      onClick={() => this.openURL(homeData)}
                      className='btn btn-primary'
                    >
                      White Paper
                      {/* <span className='ml-2 right-icon'>&#8594;</span> */}
                    </Link>
                  )}
              </Col>
              <Col lg={6} md={10}>
                {/* <div className=' mt-5 mt-lg-0'>
                  <img
                    src={hero}
                    alt=''
                    className='img-fluid d-block mx-auto'
                  />
                </div> */}
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
