import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Tokenomics.scss';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from '../constants/ChartConfig';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const RankedUser = [
  {
    id: 1,
    userName: 'Meoa Cat',
    // image: 'assets/images/seller/collector-2.gif',
    Volume: '22626610.102',
    day: '+2518181',
    sevenDay: '-45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
    increment: '19.7',
  },
  {
    id: 2,
    userName: 'rasselmrh',
    // image: 'assets/images/seller/collector-4.gif',
    Volume: '626610.02',
    day: '+2518181',
    sevenDay: '+45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 3,
    userName: 'technonazmul',
    // image: 'assets/images/seller/collector-10.png',
    Volume: '22600.102',
    day: '+2518181',
    sevenDay: '+45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 4,
    userName: 'Rotboat',
    // image: 'assets/images/seller/collector-2.png',
    Volume: '6610.102',
    day: '+2518181',
    sevenDay: '+45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 5,
    userName: 'Coffin Boxx',
    // image: 'assets/images/seller/collector-1.gif',
    Volume: '15541.22',
    day: '+2518181',
    sevenDay: '+45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 6,
    userName: 'elixir treaser',
    // image: 'assets/images/seller/collector-3.png',
    Volume: '14541.22',
    day: '+25181',
    sevenDay: '+45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 7,
    userName: 'Nakashika ',
    // image: 'assets/images/seller/collector-3.gif',
    Volume: '13541.22',
    day: '+2518',
    sevenDay: '-45151',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 8,
    userName: 'maxcot @r',
    // image: 'assets/images/seller/collector-4.png',
    Volume: '12541.22',
    day: '-2518',
    sevenDay: '+4515',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 9,
    userName: 'Meoa Cat',
    // image: 'assets/images/seller/collector-5.png',
    Volume: '11540.22',
    day: '+2511',
    sevenDay: '-4515',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
  {
    id: 10,
    userName: 'Space XXX',
    // image: 'assets/images/seller/collector-6.png',
    Volume: '10541.22',
    day: '+251',
    sevenDay: '+451',
    averagePrice: '15.01',
    owner: '11.5',
    assets: '19.7',
  },
];

export default class Tokenomics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ['A', 'B', 'C', 'D', 'V'],
    };
  }

  render() {
    const { tokenomicsData } = this.props;
    const data = {
      labels: ['2025', '2024', '2023', '2022', '2021', '2020'],
      datasets: [
        {
          data: [15, 20, 25, 30, 35, 40],
          backgroundColor: [
            ChartConfig.color.darkgreen1,
            ChartConfig.color.darkgreen2,
            ChartConfig.color.darkgreen3,
            ChartConfig.color.darkgreen4,
            ChartConfig.color.darkgreen5,
            ChartConfig.color.darkgreen6,
          ],
          hoverBackgroundColor: [
            ChartConfig.color.darkgreen1,
            ChartConfig.color.darkgreen2,
            ChartConfig.color.darkgreen3,
            ChartConfig.color.darkgreen4,
            ChartConfig.color.darkgreen5,
            ChartConfig.color.darkgreen6,
          ],
        },
      ],
    };

    const options = {
      legend: {
        position: 'bottom',
        labels: {
          fontColor: ChartConfig.legendFontColor,
          boxWidth: 10,
        },
      },
    };
    return (
      <React.Fragment>
        <section className='section bg-light' id='tokenomics'>
          <div className='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <div className='col-lg-7'>
                <div className='text-center mb-5'>
                  <h2 className='text-gradient'>
                    {tokenomicsData &&
                      tokenomicsData.dynamic_data &&
                      tokenomicsData.dynamic_data.title}
                  </h2>
                  <p className='text-white'>
                    {tokenomicsData &&
                      tokenomicsData.dynamic_data &&
                      tokenomicsData.dynamic_data.description}
                  </p>
                </div>
              </div>
            </Row>
            <Row>
              <Col
                lg={4}
                md={4}
                xl={4}
                style={{ height: '300px', width: '200px' }}
              >
                <Doughnut data={data} options={options} />
              </Col>
              <Col lg={8} md={8} xl={8}>
                <div className='table-responsive'>
                  <table className='table table-hover rank-table'>
                    <thead>
                      <tr>
                        <th scope='col'>SL</th>
                        <th scope='col'>Collection</th>
                        <th scope='col'>Volume</th>
                        <th scope='col'>24h </th>
                        <th scope='col'>7d </th>
                        <th scope='col'>Average Price</th>
                        {/* <th scope='col'>Owner</th>
                        <th scope='col'>Assets</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {RankedUser.map((item, i = 1) => (
                        <tr key={item.id}>
                          <th scope='row' className='rank-sl'>
                            {i + 1}
                          </th>
                          <td className='rank-collection a'>
                            <div className='rank-col-inner d-flex flex-wrap align-items-center'>
                              <div className='rank-col-content'>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a href='#'>{`${item.userName}`}</a>
                              </div>
                            </div>
                          </td>
                          <td className='rank-vol'>
                            <div className='rank-vol-inner d-flex flex-wrap align-items-center'>
                              <div className='rank-vol-content'>
                                {`${item.Volume}`}
                              </div>
                            </div>
                          </td>
                          <td
                            className={
                              parseInt(item.day) < 0
                                ? 'rank-hour text-danger'
                                : 'rank-hour text-success'
                            }
                          >{`${item.day}`}</td>
                          <td
                            className={
                              parseInt(item.sevenDay) < 0
                                ? 'rank-day text-danger'
                                : 'rank-day text-success'
                            }
                          >{`${item.sevenDay}`}</td>
                          <td className='rank-price'>
                            <div className='rank-vol-inner d-flex flex-wrap align-items-center'>
                              <div className='rank-vol-content'>
                                {`${item.averagePrice}`}
                              </div>
                            </div>
                          </td>
                          {/* <td className='rank-owner'>{`${item.owner}`}k</td>
                          <td className='rank-assets'>{`${item.assets}`}k</td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
