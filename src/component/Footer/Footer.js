import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import FooterLink from '../Footer/Footer_link';
// import logodark from '../../assets/images/logo-dark.png';
import FeatherIcon from 'feather-icons-react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: 'Customer',
          child: [
            { title: 'Works', link: '/' },
            { title: 'Strategy', link: '/' },
            { title: 'Releases', link: '/' },
            { title: 'Press', link: '/' },
            { title: 'Mission', link: '/' },
          ],
        },
        {
          id: 2,
          title: 'Product',
          child: [
            { title: 'Tranding', link: '/' },
            { title: 'Popular', link: '/' },
            { title: 'Customers', link: '/' },
            { title: 'Features', link: '/' },
          ],
        },
        {
          id: 3,
          title: 'Learn More',
          child: [
            { title: 'Developers', link: '/' },
            { title: 'Support', link: '/' },
            { title: 'Customer Service', link: '/' },
            { title: 'Get Started', link: '/' },
            { title: 'Guide', link: '/' },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer className='footer'>
          <Container>
            <Row>
              <Col lg={4}>
                <div className='mb-5'>
                  <Link to='#'>
                    {/* <img src={logodark} alt='' className='' height='35' /> */}
                    <div className='logo-title'>
                      <span className='text-primary text-uppercase'>
                        Logo here
                      </span>
                    </div>
                  </Link>
                  <h6 className='text-white-50 my-4'>Subscribe and follow</h6>
                  <ul className='list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0'>
                    <li className='list-inline-item ml-0'>
                      <Link to='#' className='menu-social-link'>
                        <FeatherIcon
                          icon='facebook'
                          className='icon-xs sw_1-5'
                        />
                      </Link>
                    </li>{' '}
                    <li className='list-inline-item'>
                      <Link to='#' className='menu-social-link'>
                        <FeatherIcon
                          icon='twitter'
                          className='icon-xs sw_1-5'
                        />
                      </Link>
                    </li>{' '}
                    <li className='list-inline-item'>
                      <Link to='#' className='menu-social-link'>
                        <FeatherIcon
                          icon='instagram'
                          className='icon-xs sw_1-5'
                        />
                      </Link>
                    </li>{' '}
                    <li className='list-inline-item mr-0'>
                      <Link to='#' className='menu-social-link'>
                        <FeatherIcon
                          icon='linkedin'
                          className='icon-xs sw_1-5'
                        />
                      </Link>
                    </li>
                  </ul>
                  {/* <Link to='#' className='text-white-70'>
                    <FeatherIcon className='icon mr-1' icon='instagram' /> Join
                    Us In Instagram
                  </Link> */}
                </div>
              </Col>
              <Col lg={7} className='offset-lg-1'>
                <Row>
                  {/* Render Footer Link */}
                  {this.state.links.map((item, key) => (
                    <Col md={4} key={key}>
                      <h4 className='text-white f-22 font-weight-normal mb-3'>
                        {item.title}
                      </h4>
                      <ul className='list-unstyled footer-sub-menu'>
                        {item.child.map((linkItem, key) => (
                          <li key={key}>
                            <Link className='footer-link' to={linkItem.link}>
                              {linkItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
