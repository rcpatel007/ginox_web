import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Tokenomics.scss';
import BigRoundDiamond from '../assets/images/Diamonds/Big Round Diamond.svg';
import HeartDiamond from '../assets/images/Diamonds/Heart Diamond.svg';
import RoundDiamond from '../assets/images/Diamonds/Round Diamond.svg';
import SquareDiamond from '../assets/images/Diamonds/Square Diamond.svg';
export default class Roadmap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { roadmapData } = this.props;
    return (
      <React.Fragment>
        <section className='section bg-light' id='roadmap'>
          <div className='stars'></div>
          <Container>
            <div className='hero_content--wrap'>
              <div className='section_content--wrap'>
                <h2 className='text-gradient'>
                  {roadmapData &&
                    roadmapData.dynamic_data &&
                    roadmapData.dynamic_data.title}
                </h2>
                <div className='divider'></div>
                <h3 className='text-white'>
                  {roadmapData &&
                    roadmapData.dynamic_data &&
                    roadmapData.dynamic_data.description}
                </h3>
              </div>
            </div>
            <div className='rmap_text-grid'>
              <div className='rmap_content--block'>
                <div className='rmap_top--block'>
                  <div className='rmap_img--block'>
                    <div className='rmap_img--wrap'>
                      <img
                        src={BigRoundDiamond}
                        loading='lazy'
                        alt='roadmap abstract shape'
                        className='rmap_img'
                      />
                    </div>
                  </div>
                </div>
                {/* <div className='rmap_middle--wrap'>
                  <div className='rmap_current-long'></div>
                  <div className='rmap_long-block is--fade--end'></div>
                  <div className='rmap_upline--wrap'>
                    <div className='rmap_circle'></div>
                    <div className='rmap_upline is--current'></div>
                  </div>
                </div> */}
                <div className='rmap_content--para'>
                  <div className='content_side-block--small'></div>
                  <div className='rmap_range text-gradient-title mr-5'>
                    {' '}
                    {roadmapData &&
                      roadmapData.dynamic_data &&
                      roadmapData.dynamic_data.q1_title}
                  </div>
                  {/* <div className='divider'></div> */}
                  {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                  <ul role='list'>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q1_description_1}
                        <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q1_description_2}
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='rmap_content--block'>
                <div className='rmap_top--block'>
                  <div className='rmap_img--block'>
                    <div className='rmap_img--wrap'>
                      <img
                        src={HeartDiamond}
                        loading='lazy'
                        alt='roadmap abstract shape'
                        className='rmap_img'
                      />
                    </div>
                  </div>
                </div>
                {/* <div className='rmap_middle--wrap --is-mobonly'>
                  <div className='rmap_upline--wrap'>
                    <div className='rmap_circle'></div>
                    <div className='rmap_upline'></div>
                  </div>
                  <div className='rmap_long-block is--1'></div>
                  <div className='rmap_long-block is--fade'></div>
                </div> */}
                <div className='rmap_content--para is--current'>
                  <div className='content_side-block--small'></div>
                  <div className='rmap_range text-gradient-title mr-5'>
                    {roadmapData &&
                      roadmapData.dynamic_data &&
                      roadmapData.dynamic_data.q2_title}
                  </div>
                  {/* <div className='divider'></div> */}
                  {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                  <ul role='list'>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q2_description_1}
                        <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q2_description_2}
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='rmap_content--block'>
                <div className='rmap_top--block'>
                  <div className='rmap_img--block'>
                    <div className='rmap_img--wrap'>
                      <img
                        src={RoundDiamond}
                        loading='lazy'
                        alt='roadmap abstract shape'
                        className='rmap_img'
                      />
                    </div>
                  </div>
                </div>
                {/* <div className='rmap_middle--wrap'>
                  <div className='rmap_upline--wrap'>
                    <div className='rmap_circle'></div>
                    <div className='rmap_upline'></div>
                  </div>
                  <div className='rmap_long-block'></div>
                </div> */}
                <div className='rmap_content--para'>
                  <div className='content_side-block--small'></div>
                  <div className='rmap_range text-gradient-title mr-5'>
                    {roadmapData &&
                      roadmapData.dynamic_data &&
                      roadmapData.dynamic_data.q3_title}
                  </div>
                  {/* <div className='divider'></div> */}
                  {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                  <ul role='list'>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q3_description_1}
                        <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q3_description_2}
                        <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q3_description_3}
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='rmap_content--block'>
                <div className='rmap_top--block'>
                  <div className='rmap_img--block'>
                    <div className='rmap_img--wrap'>
                      <img
                        src={SquareDiamond}
                        loading='lazy'
                        alt='roadmap abstract shape'
                        className='rmap_img'
                      />
                    </div>
                  </div>
                </div>
                {/* <div className='rmap_middle--wrap'>
                  <div className='rmap_upline--wrap'>
                    <div className='rmap_circle'></div>
                    <div className='rmap_upline'></div>
                  </div>
                  <div className='rmap_long-block is--end'></div>
                </div> */}
                <div className='rmap_content--para'>
                  <div className='content_side-block--small'></div>
                  <div className='rmap_range text-gradient-title'>
                    {roadmapData &&
                      roadmapData.dynamic_data &&
                      roadmapData.dynamic_data.q4_title}
                  </div>
                  {/* <div className='divider'></div> */}
                  {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                  <ul role='list'>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q4_description_1}
                        <br />
                      </p>
                    </li>
                    <li>
                      <p>
                        {roadmapData &&
                          roadmapData.dynamic_data &&
                          roadmapData.dynamic_data.q4_description_2}
                        <br />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
          {/* <Container>
            <Row className='align-items-center justify-content-center'>
              <Col lg={6}>
                <h1 className='hero-1-title font-weight-normal text-white mb-4'>
                  Lorem Ipsum is simply dummy text
                </h1>
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
              <Col lg={6} md={10}>
                <div className=' mt-5 mt-lg-0'>
                  <img
                    src='{hero}'
                    alt=''
                    className='img-fluid d-block mx-auto'
                  />
                </div>
              </Col>
            </Row>
          </Container> */}
        </section>
      </React.Fragment>
    );
  }
}
