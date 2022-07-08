import React, { Component } from 'react';

import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from 'reactstrap';
import './Tokenomics.scss';
import ContactImg from '../assets/images/contact-img.png';

export default class Contact extends Component {
  

//  constructor(props){
 
// }
componentWillMount(){
  // let el = document.querySelector("#stars");
       
  // el.addEventListener("mousemove", (e) => {
  // el.style.backgroundPositionX = -e.offsetX + "px";
  // el.style.backgroundPositionY = -e.offsetY + "px";
  // });
  // alert("gllo")
}
   
  
  
  render() {
  //  function test() {
  
     
    //  } 
    // const { animation } = this.props;
  
  return (
      <React.Fragment>
        <section className='section bg-light' id='contact'>
          <div className='stars' id='stars'></div>
          <Container>
            <Row className='justify-content-center'>
              <Col lg={6}></Col>
              <Col lg={6}>
                <div className='text-left mb-5'>
                  <h2 className='text-gradient'>Contact Us</h2>
                  <p className='text-white'>
                    Ut enim ad minima veniam quis nostrum exercitationem ullam
                    corporis suscipit laboriosam nisi commodi consequatur.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className='align-items-center justify-content-center'>
              <Col lg={6} md={10}>
                <img src={ContactImg} alt='contact' width='456' height='422' />
              </Col>
              <Col lg={5} className='mr-5'>
                <h4 className='line-height-1_4 mb-4 text-white'>
                  Get in Touch
                </h4>
                <div className='custom-form mt-4 mt-lg-0'>
                  <div id='message'></div>
                  <Form method='post' name='contact-form' id='contact-form'>
                    <Row>
                      <Col md={6}>
                        <FormGroup className='app-label'>
                          <Label for='name' className='text-white'>
                            First Name
                          </Label>
                          <Input
                            name='name'
                            id='name'
                            type='text'
                            className='form-control'
                            placeholder='Enter. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className='app-label'>
                          <Label for='lastname' className='text-white'>
                            Last Name
                          </Label>
                          <Input
                            name='lastname'
                            id='lastname'
                            type='text'
                            className='form-control'
                            placeholder='Enter. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup className='app-label'>
                          <Label for='email' className='text-white'>
                            Your Email
                          </Label>
                          <Input
                            name='email'
                            id='email'
                            type='email'
                            className='form-control'
                            placeholder='Email. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup className='app-label'>
                          <Label for='comments' className='text-white'>
                            Type Massage
                          </Label>
                          <Input
                            name='comments'
                            id='comments'
                            type='textarea'
                            rows='4'
                            className='form-control'
                            placeholder='Message. . .'
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Button
                          color='primary'
                          id='submit'
                          name='send'
                          className='btn btn-primary'
                        >
                          Send Message
                        </Button>
                        <div id='simple-msg'></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
            {/* <Row className='align-items-center justify-content-center'>
              <Col lg={6} md={10}>
                <h4 className='line-height-1_4 mb-4 text-white'>
                  Get in Touch
                </h4>
                <div className='custom-form mt-4 mt-lg-0'>
                  <div id='message'></div>
                  <Form method='post' name='contact-form' id='contact-form'>
                    <Row>
                      <Col md={6}>
                        <FormGroup className='app-label'>
                          <Label for='name' className='text-white'>
                            First Name
                          </Label>
                          <Input
                            name='name'
                            id='name'
                            type='text'
                            className='form-control'
                            placeholder='Enter. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className='app-label'>
                          <Label for='lastname' className='text-white'>
                            Last Name
                          </Label>
                          <Input
                            name='lastname'
                            id='lastname'
                            type='text'
                            className='form-control'
                            placeholder='Enter. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup className='app-label'>
                          <Label for='email' className='text-white'>
                            Your Email
                          </Label>
                          <Input
                            name='email'
                            id='email'
                            type='email'
                            className='form-control'
                            placeholder='Email. . .'
                          />
                        </FormGroup>
                      </Col>
                      <Col md={12}>
                        <FormGroup className='app-label'>
                          <Label for='comments' className='text-white'>
                            Type Massage
                          </Label>
                          <Input
                            name='comments'
                            id='comments'
                            type='textarea'
                            rows='4'
                            className='form-control'
                            placeholder='Message. . .'
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Button
                          color='primary'
                          id='submit'
                          name='send'
                          className='btn btn-primary'
                        >
                          Send Message
                        </Button>
                        <div id='simple-msg'></div>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg={5} className="offset-lg-1">
                <div className="mb-5 mb-lg-0">
                //   <div className="text-center">
                //     <img src={ContactImg} alt="" className="img-fluid d-block w-75 mx-auto" />
                //     <h4 className="mt-4">Are You Facing Any Problem..?</h4>
                //     <p className="text-white mb-4">It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
                //     <Link to="#" className="btn btn-success"><FeatherIcon className="icon mr-2 icon-fill-white" icon="message-circle" /> Start Live Chat</Link>
                //     <p className="mt-4">Or you can contact at</p>
                //     <Row>
                //       <Col md={6}>
                //         <Link to="#">
                //           <div className="badge f-14 bg-soft-dark text-white"><span className="text-dark mr-1">Email:</span> Youremailid@gmail.com</div>
                //         </Link>
                //       </Col>
                //       <Col md={6} className="mt-2 mt-sm-0">
                //         <Link to="#">
                //           <div className="badge f-14 bg-soft-dark text-white"><span className="text-dark mr-1">Phone:</span> (001) 1234 567 890</div>
                //         </Link>
                //       </Col>
                //     </Row>
                //   </div>
                </div>
              </Col>
            </Row> */}
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
