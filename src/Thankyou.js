 import React,{Component} from 'react';
//  import {Button,Nav,NavItem} from 'react-bootstrap';
 import {Button,Nav,Navbar,NavItem} from 'react-bootstrap';

 import './Thank.css';
 import imh from './Assets/imh.jpg';
 export default class ThankYou extends React.Component{
     render() {
         return(
             <div>
                                    <nav  className="navbar nav-tabs navbar-default navbar-light navbar-fixed-top shrinkable bg-sucess"  >

<Navbar.Header>
    <strong> M.V.G.R College of Engineering </strong>
    </Navbar.Header>

<Nav  pullRight>

        <NavItem eventKey="5" href="/Login">
         <Button className="buttonr"  bsStyle="primary" bsSize="large" vertical="true" block> Login </Button>
        </NavItem>
        <NavItem eventKey="2" href="/Pregister" >
         <Button bsStyle="primary" bsSize="large"  block> SIGNUP</Button>
        </NavItem>
         </Nav>
    </nav>      
            <div className="jumbo">        
            <h1 className="display-3">Thank You!</h1>
            <p align="center" ><strong>Issues are Registered</strong>Please take appropriate action to resolve the Issues</p>
            <hr />
            <p align="center">
              Having trouble? <a href="">Contact us</a>
            </p>
            <p align="center">
    <Button bsStyle="primary" href="/" bsSize="large">Homepage</Button> <br />
    <Button bsStyle="primary" href="/Display" bsSize="large"> Display Issues </Button>
  </p>
  <img src={imh} alt="true" />
          </div>
          <nav className="navbar-default navbar-sticky-bottom" >
         <div >
</div>
    <footer className="footer" >
        <div className="">
            <div className="row">
                <div className="col-sm-2">
                    <h5 className=" text-left text-uppercase  mt-3 font-weight-bold">Get started</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Sign up</li>
                        <li>Downloads</li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5 className=" text-left text-uppercase  mt-3 font-weight-bold">About us</h5>
                    <ul >
                        <li><a href="">Company</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5 className=" text-left text-uppercase  mt-3 font-weight-bold">Support</h5>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Help desk</a></li>
                        <li><a href="">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <Button type="button" bsStyle="info" bsClass="btn1 ">Contact us</Button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.byteorigin.com"> Byteorigin.com </a>
        </div>        
    </footer>
 </nav> 
          
          </div>
          
        

         )
     }
 }
 
