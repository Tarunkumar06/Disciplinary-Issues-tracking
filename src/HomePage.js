import React,{Component} from 'react';
import {NavItem,Nav,MenuItem,Button,Navbar} from 'react-bootstrap';
import './Home.css';
import ICON1 from './Assets/ICON1.jpg';
import chrome from './Assets/chrome.jpg';

export default class Home extends React.Component{
  render(){
    return(
      <div>
 <nav  className="navbar nav-tabs navbar-default  navbar-fixed-top shrinkable bg-sucess"  >

<Navbar.Header>
    <strong> Disciplinary Issues Tracking </strong>
    </Navbar.Header>

<Nav  pullRight>

        <NavItem eventKey="5" href="/Login">
         <Button  className="bt" bsStyle="primary" bsSize="large" vertical="true" align="right" block> Login </Button>
        </NavItem>
        <NavItem eventKey="2" href="/Pregister" >
         <Button className="bt" bsStyle="primary" bsSize="large"  block> SIGNUP</Button>
        </NavItem>
         </Nav>
    </nav>
        <img src={chrome} alt="true"  />
        <div>
         <nav className="navbar-default navbar-fixed-bottom" >
         <div >
</div>
    <footer className="footerh" >
    <div >
            <div className="row">
                <div className="col-sm-2">
                    <h5 className=" text-left text-uppercase  mt-3 font-weight-bold">Get started</h5>
                    <ul>
                        <li>Home</li>
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
      </div>
    );
  }
}

