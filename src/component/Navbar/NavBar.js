import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';
// Import Logo
// import logodark from '../../assets/images/logo-dark.png';
// import logolight from '../../assets/images/logo-light.png';
import ScrollspyNav from './Scrollspy';
import '../Tokenomics.scss';

class NavbarPage extends Component {
  // render() {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMenu: false,
    };
  }

  componentWillMount(){
    
  }
  
  render() {
    let targetId = this.props.navItems.map((item) => {
      return item.idnm;
    });
    
    return (
      <React.Fragment>
        <Navbar
          expand='lg'
          fixed={this.props.top === true ? 'top' : ''}
          className={
            this.props.navClass +
            ' fixed-top navbar-custom sticky sticky-dark align-items-center'
          }
          id='navbar'
        >
          <Container>
            {/* LOGO */}
            <Link
              className='logo margin-right'
              to='/'
              style={{
                color:"linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)"
              }}
              // style={{ marginRight: '5rem !important' }}
            >
              {/* {this.props.imglight === true ? (
                <img src={logolight} alt='' height='26' />
              ) : (
                <img src={logodark} alt='' height='26' />
              )} */}
              <div className='logo-title'>
                <span className='text-gradient text-uppercase'>Logo here</span>
              </div>
            </Link>
            <NavbarToggler
              onClick={this.toggle}
              style={{ backgroundColor: '#3956de' }}
            >
              <span className='ti-menu'></span>
            </NavbarToggler>
            <Collapse
              id='navbarCollapse'
              isOpen={this.state.isOpenMenu}
              className=' navbar-collapse'
            >
              <ScrollspyNav
                scrollTargetIds={targetId}
                scrollDuration='800'
                headerBackground='true'
                activeNavClass='active'
                className='navbar-collapse'
              >
                <Nav
                  className='navbar-nav navbar-center'
                  id='navbar-navlist'
                  style={{ justifyContet: 'flex-end' }}
                >
                  {this.props.navItems.map((item, key) => (
                    <NavItem
                      key={key}
                      className={
                        item.navheading === 'Home' ? 'active' : 'text-white'
                      }
                    >
                      <NavLink
                        className={
                          item.navheading === 'Home' ? 'active' : 'text-white'
                        }
                        href={'#' + item.idnm}
                      >
                        {item.navheading}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                {/* <ul className="list-inline ml-auto menu-social-icon mb-0 py-2 py-lg-0">
                    <li className="list-inline-item ml-0">
                        <Link to="#" className="menu-social-link"><FeatherIcon icon="facebook" className="icon-xs sw_1-5"  /></Link>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Link to="#" className="menu-social-link"><FeatherIcon icon="twitter" className="icon-xs sw_1-5"  /></Link>
                    </li>{" "}
                    <li className="list-inline-item">
                    <Link to="#" className="menu-social-link"><FeatherIcon icon="instagram" className="icon-xs sw_1-5"  /></Link>
                    </li>{" "}
                    <li className="list-inline-item mr-0">
                    <Link to="#" className="menu-social-link"><FeatherIcon icon="linkedin" className="icon-xs sw_1-5"  /></Link>
                    </li>
                </ul> */}
              </ScrollspyNav>
            </Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}
// }
export default NavbarPage;
