import React, { Component } from 'react';
import './C.css';
import {ButtonToolbar,Button,Nav,NavItem,Navbar} from 'react-bootstrap';
import axios from 'axios';


export default class Issue extends React.Component {
        constructor(props) {
        super(props);
        var temp = JSON.parse(sessionStorage.getItem("userData"))
        console.log(temp.role)
        if(temp.role === 'ADMIN') {
            this.adminRole = true
        } else {
            this.adminRole = false
        }
        
        // console.log(+JSON.stringify(pub))
        this.state={
          RegistrationNum:'',
          YOST:'',
          Depart:'',
            Locate:'',
          Issues:'',
          status:''
        };
      }
      function(disable) {
          if (this.adminRole==='ADMIN') {
              document.getElementById('status').disabled=false;
          }
          else{
              document.getElementById('status').disabled=true;
          }
          
      }
      componentwillmount() {
          localStorage.getItem('role') && this.setState(
              {
                  
                  role:JSON.parse(localStorage.getItem('role')),
                  
              },
              console.log(JSON.parse(localStorage.getItem('role')))
          )
      }
      
    
      onChange = event => {
        this.setState({
          [event.target.id]: event.target.value,
        });
        // console.log(JSON.parse(localStorage.getItem('role')))
    }
      
      onSubmit = (e) => {
        e.preventDefault();
        this.componentwillmount();
        const data = this.state;
        // console.log(JSON.parse(localStorage.getItem('role')))

          axios.post('http://localhost:80/create/complaint', data) 
          .then((result) => {
            
        //     //access the results here....
            alert("Complaint created");
            this.props.history.push('/ThankYou');
          })  
        }
    render() {      
      const{RegistrationNum, YOST,Depart,Locate,Issues,status}=this.state;
    //   localStorage.getItem('role')
    // if(user.role==ADMIN){
    //     this.setState=this.state.status;
    // }
    console.log(this.adminRole)

                  return ( 
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
                 <form onSubmit={this.onSubmit}  className="col" >
                    <div align="right"><Button bsSize="large" bsStyle="primary" href="/login"  value="Logout"> Logout </Button></div>
                          <font size="5" >
                            <div className="log">
                              <h1> Issue Entry Form </h1>
                              <label> Regd_no </label>
                              <input type="text" name="RegistrationNum" id="RegistrationNum" size="10" placeholder="Enter Regd_no" value={this.state.RegistrationNum} onChange={this.onChange} required /> <br />
                              <label> Year of study </label>
                              <input type="text" name=" YOST" size="5" id="YOST" placeholder="Enter year of study" value={this.state.YOST} onChange={this.onChange} /> <br />
                              <label> Select Dept </label>
                              <select value={this.state.Depart} onChange={this.onChange} className="op" name="Depart" id="Depart" required> 
                                <option> Select Dept </option>
                                <option value="Cse">Cse</option>
                                <option value="Ece">Ece</option>
                                <option value="It">IT</option>
                                <option value="EEE">EEE</option>
                                <option value="Mech">Mech</option>
                                <option value="Chem">Chem</option>
                              </select>  <br />
                              <label> Select Location </label>
                              <select className="op" name="Locate" id="Locate" value={this.state.Locate} onChange={this.onChange} >
                                <option> SelectLocation </option>
                                <option value="college">College</option>
                                <option value="Hostel"> Hostel </option>
                                <option value="Library"> Library </option>
                              </select> <br />
                              <label> Disciplinary Issue </label>
                              <input type="text" size="20" name="Issues" id="Issues" value={this.state.Issues} onChange={this.onChange}  required /> <br />
                              {
                                  this.adminRole ? <div>
                                      <label> <span> Status </span> </label>
                             <input type="text" size="10" name="status" id="status" value={this.state.status} onChange={this.onChange} />
                                  </div> : <div></div>
                              }  
                             
                              
                              <ButtonToolbar>
                                  <Button bsStyle="primary"  bsSize="lg" type="submit" value="submit" block> ADD </Button>
                                </ButtonToolbar>
    
                            </div>
                          </font>
                  </form>
                  <nav className="navbar-default navbar-sticky-bottom" >
                  <div >
         </div>
             <footer className="footer1" >
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
                 );
        }
    }