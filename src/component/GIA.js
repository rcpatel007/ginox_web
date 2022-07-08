import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import './Tokenomics.scss';

const GIA = () => {
  return (
    <React.Fragment>
      <section className='section bg-light' id='gia'>
        <div className='stars'></div>
        <Container>
          <Row>
            <Col xl={4} md={4} lg={4}>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <td style={{ border: 'none' }} colSpan={3}>
                        <img
                          src='https://www.linkpicture.com/q/Gemological_Institute_of_America_logo.svg.png'
                          alt='fdjd'
                          height={100}
                          width={250}
                        />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)' }}>
                      <td style={{ border: 'none' }} colSpan={3}>
                        GIA NATURAL DIAMOND GRADING REPORT
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} style={{ border: 'none' }}>
                        January 01,2014
                      </td>
                    </tr>
                    <tr>
                      <td>GIA Report Number</td>
                      <td>...........</td>
                      <td>2141414141</td>
                    </tr>
                    <tr>
                      <td>Shape and Cutting Style</td>
                      <td>...........</td>
                      <td>Round Brilliant</td>
                    </tr>
                    <tr>
                      <td>Measurements</td>
                      <td>...........</td>
                      <td>6.41 - 6.43*3.97 mm</td>
                    </tr>
                    <tr style={{ height: '30px' }}></tr>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)'  }}>
                      <td colSpan={3} style={{ border: 'none' }}>
                        GRADING RESULTS
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none' }}>Carat Weight</td>
                      <td style={{ border: 'none' }}>...........</td>
                      <td style={{ border: 'none' }}>1.01 carat</td>
                    </tr>
                    <tr>
                      <td>Color Grade</td>
                      <td>...........</td>
                      <td>F</td>
                    </tr>
                    <tr>
                      <td>Clarity Grade</td>
                      <td>...........</td>
                      <td>S|1</td>
                    </tr>
                    <tr>
                      <td>Cut Grade</td>
                      <td>...........</td>
                      <td>Excellent</td>
                    </tr>
                    <tr style={{ height: '30px' }}></tr>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)'  }}>
                      <td colSpan={3} style={{ border: 'none' }}>
                        ADDITIONAL GRADING INFORMATION
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none' }}>Polis</td>
                      <td style={{ border: 'none' }}>...........</td>
                      <td style={{ border: 'none' }}>Excellent</td>
                    </tr>
                    <tr>
                      <td>Symmetry</td>
                      <td>...........</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td>Fluorescence</td>
                      <td>...........</td>
                      <td>None</td>
                    </tr>
                    <tr>
                      <td>Inscription (s):</td>
                      <td></td>
                      <td>GIA 21421421</td>
                    </tr>
                    <tr>
                      <td>Comments:</td>
                      <td>SAMPLE</td>
                      <td>SAMPLE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col xl={4} md={4} lg={4}>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <td
                        className='text-center text-gradient'
                        style={{ border: 'none' }}
                      >
                        GIA REPORT
                      </td>
                    </tr>
                    <tr>
                      <td className='text-center' style={{ border: 'none' }}>
                        241421452
                      </td>
                    </tr>
                    <tr>
                      <td
                        className='text-center text-gradient-title'
                        style={{ border: 'none' }}
                      >
                        Verify this report at GIA.edu
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)'  }}>
                      <td style={{ border: 'none' }}>PROPORTIONS</td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none', height: 295 }}>
                        {/* <img
                          src='https://www.linkpicture.com/q/Capture2_58.png'
                          alt='proportions'
                          width={320}
                          height={350}
                        /> */}
                      </td>
                    </tr>
                    <tr style={{ height: '30px' }}></tr>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)'  }}>
                      <td style={{ border: 'none' }}>
                        CLARITY CHARACTERISTICS
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none', height: 300 }}>
                        {/* <img
                          src='https://www.linkpicture.com/q/Capture3_34.png'
                          alt='characteristics'
                          height={300}
                          width={300}
                        /> */}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none' }}>KEY TO SYMBOLS</td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none' }}>
                        <ul>
                          <li>Crystal</li>
                          <li>Cloud</li>
                          <li>Feather</li>
                          <li>Natural</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                  {/* <tfoot>
                    <tr style={{ height: '100px' }}></tr>
                    <tr>
                      <td style={{ border: 'none' }}>
                        <ul>
                          <li>
                            Red symbols denote internal characteristics
                            (inclusions). Green or black symbols denote external
                            characteristics (blemishes).Diagram is an
                            approaximate represntations of the diamond, and
                            symbols shown indicate type, position, and
                            approaximate size of clarity characteristics. All
                            clarity characteristics may nit be shown. Details of
                            finish are not shown.
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tfoot> */}
                </table>
              </div>
            </Col>
            <Col xl={4} md={4} lg={4}>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <td style={{ height: '144px', border: 'none' }}></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: 'linear-gradient(100.62deg, #F44876 1.82%, #FA7B55 92.88%)'  }}>
                      <td style={{ border: 'none' }}>GRADING SCALES</td>
                    </tr>
                    <tr>
                      <td style={{ border: 'none' }}>
                        <table className='table'>
                          <tr>
                            <td style={{ border: 'none' }}>GIA COLOR SCALE</td>
                            <td style={{ border: 'none' }}>
                              GIA CLARITY SCALE
                            </td>
                            <td style={{ border: 'none' }}>GIA CUT SCALE</td>
                          </tr>
                          <tr className='border-left'>
                            <td>D</td>
                            <td rowSpan='2 ' className='border-left'>
                              FLAWLESS
                            </td>
                            <td rowSpan='4 ' className='border-left'>
                              EXCELLENT
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>E</td>
                          </tr>
                          <tr className='border-left'>
                            <td>F</td>
                            <td rowSpan='2 ' className='border-left'>
                              INTERNALLY FLAWLESS
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>G</td>
                          </tr>
                          <tr className='border-left'>
                            <td>H</td>
                            <td rowSpan='3' className='border-left'>
                              VVS1
                            </td>
                            <td rowSpan='5 ' className='border-left'>
                              VERY GOOD
                            </td>
                          </tr>

                          <tr className='border-left'>
                            <td>I</td>
                          </tr>
                          <tr className='border-left'>
                            <td>J</td>
                          </tr>
                          <tr className='border-left'>
                            <td>K</td>
                            <td rowSpan='3' className='border-left'>
                              VVS2
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>L</td>
                          </tr>
                          <tr className='border-left'>
                            <td>M</td>
                            <td rowSpan='4' className='border-left'>
                              GOOD
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>N</td>
                            <td rowSpan='2' className='border-left'>
                              VS1
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>O</td>
                          </tr>
                          <tr className='border-left'>
                            <td>P</td>
                            <td rowSpan='2' className='border-left'>
                              VS2
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>Q</td>
                            <td rowSpan='4' className='border-left'>
                              PQRSTU
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>R</td>
                            <td rowSpan='2' className='border-left'>
                              SI1
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>S</td>
                          </tr>
                          <tr className='border-left'>
                            <td>T</td>
                            <td rowSpan='2' className='border-left'>
                              SI2
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>U</td>
                            <td rowSpan='3' className='border-left'>
                              FAIR
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>V</td>
                            <td rowSpan='2' className='border-left'>
                              I1
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>W</td>
                          </tr>
                          <tr className='border-left'>
                            <td>X</td>
                            <td rowSpan='3' className='border-left'>
                              I2
                            </td>

                            <td rowSpan='3' className='border-left'>
                              {' '}
                              POOR
                            </td>
                          </tr>
                          <tr className='border-left'>
                            <td>Y</td>
                          </tr>
                          <tr className='border-left border-bottom'>
                            <td>Z</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default GIA;
