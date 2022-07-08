import React, { Component, Suspense } from 'react';
import '../../component/Tokenomics.scss';
import { GetAllSections } from '../../services/Section';

// Importing Section
const Navbar = React.lazy(() => import('../../component/Navbar/NavBar'));

const Section = React.lazy(() => import('./Section'));
const About = React.lazy(() => import('../../component/About'));
const Features = React.lazy(() => import('../../component/Features'));
const MediaPartner = React.lazy(() => import('../../component/MediaPartner'));
const Roadmap = React.lazy(() => import('../../component/Roadmap'));
const Team = React.lazy(() => import('../../component/Team'));
// const Whitepaper = React.lazy(() => import('../../component/Whitepaper'));
const Contact = React.lazy(() => import('../../component/Contact'));
const Footer = React.lazy(() => import('../../component/Footer/Footer'));
const Investors = React.lazy(() => import('../../component/Investors'));
const Tokenomics = React.lazy(() => import('../../component/Tokenomics'));
const GIA = React.lazy(() => import('../../component/GIA'));

class Layout1 extends Component {

  componentWillMount(){
  // let el = document.querySelector("#stars");
       
  // el.addEventListener("mousemove", (e) => {
  // el.style.backgroundPositionX = -e.offsetX + "px";
  // el.style.backgroundPositionY = -e.offsetY + "px";
  // });
  // alert("gllo")
}
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        // { id: 1, idnm: 'home', navheading: 'Home' },
        { id: 2, idnm: 'about', navheading: 'About' },
        { id: 3, idnm: 'services', navheading: 'Features' },
        // { id: 4, idnm: 'features', navheading: 'Media Partners' },
        // { id: 5, idnm: 'investors', navheading: 'Investors' },
        // { id: 6, idnm: 'tokenomics', navheading: 'Tokenomics' },
        { id: 7, idnm: 'roadmap', navheading: 'Roadmap' },
        { id: 8, idnm: 'team', navheading: 'Team' },
        // { id: 9, idnm: 'whitepaper', navheading: 'Whitepaper' },
        { id: 10, idnm: 'contact', navheading: 'Contact Us' },
      ],
      pos: document.documentElement.scrollTop,
      imglight: false,
      navClass: '',
      homeData: [],
      aboutData: [],
      featureData: [],
      mediaPartnerData: [],
      investorData: [],
      tokenomicsData: [],
      roadmapData: [],
      teamData: [],
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
    this.getSectionData();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > this.state.pos) {
      this.setState({ navClass: 'nav-sticky', imglight: false });
    } else {
      this.setState({ navClass: '', imglight: false });
    }
  };

  //set preloader div
  PreLoader = () => {
    return (
      <div id='preloader'>
        <div id='status'>
          <div className='spinner'>
            <div className='bounce1'></div>
            <div className='bounce2'></div>
            <div className='bounce3'></div>
          </div>
        </div>
      </div>
    );
  };

  getSectionData() {
    let pagination = '?page=1&limit=10';
    GetAllSections(pagination)
      .then((res) => {
        const data = res && res.data && res.data.data && res.data.data.data;
        const [homeData] = data.filter(
          (section) => section.section_type === 'Home'
        );
        const [aboutData] = data.filter(
          (section) => section.section_type === 'About'
        );
        const [featureData] = data.filter(
          (section) => section.section_type === 'Features'
        );
        const [mediaPartnerData] = data.filter(
          (section) => section.section_type === 'Media Partner'
        );
        const [investorData] = data.filter(
          (section) => section.section_type === 'Investors & Partners'
        );
        const [tokenomicsData] = data.filter(
          (section) => section.section_type === 'Tokenomics'
        );
        const [roadmapData] = data.filter(
          (section) => section.section_type === 'Roadmap'
        );
        const [teamData] = data.filter(
          (section) => section.section_type === 'Core Team'
        );
        this.setState({
          homeData,
          aboutData,
          featureData,
          mediaPartnerData,
          investorData,
          tokenomicsData,
          roadmapData,
          teamData,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.PreLoader()}>
          <Navbar
            navItems={this.state.navItems}
            navClass={this.state.navClass}
            imglight={this.state.imglight}
          />

          <Section homeData={this.state.homeData} />
          <About aboutData={this.state.aboutData} />
          <Features featureData={this.state.featureData} />
          <MediaPartner mediaPartnerData={this.state.mediaPartnerData} />
          <Investors investorData={this.state.investorData} />
          <Tokenomics tokenomicsData={this.state.tokenomicsData} />
          <Roadmap roadmapData={this.state.roadmapData} />
          <GIA />
          <Team teamData={this.state.teamData} />
          {/* <Whitepaper /> */}
          <Contact />
          <Footer />
        </Suspense>
      </React.Fragment>
    );
  }
}
export default Layout1;
