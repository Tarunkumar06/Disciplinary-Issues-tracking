import React, {Component} from 'react';
import './style.css';
import axios from 'axios';
import {ButtonToolbar,Button,Navbar,NavItem,Nav} from 'react-bootstrap';

export default class Plogin extends React.Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password:'',
        };
      }
      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        // console.log(e.target.value)
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      onSubmit = (e) => {
        //   console.log("entered")
        e.preventDefault();
        // get our form data out of state
        const data = this.state;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(this.state.email) == true) {
            // console.log("ok")
          axios.post('http://localhost:80/user/login', data) 
          .then((result) => {
              console.log(result)
              var userDetails = {
                email: result.data.user.email,
                token: result.data.user.confirmationToken, 
                role: result.data.user.role[0]
            }
            
             sessionStorage.setItem("userData",JSON.stringify(userDetails))
             console.log(sessionStorage.getItem("userData"))
            //access the results here....
            alert("sucessfully Loggedin")
            this.props.history.push('/Display');
    // console.log(result)
          })
        } 
        else{
            alert("Invalid Email")
        }
        
        // console.log(this.state)
        
      }    
                        
    render() {
        const{email,password}=this.state;
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
            <form onSubmit={this.onSubmit} className="pr1">
            
            <div className="FR" >   
            <font size="4">
            <h1>  Login </h1>
            <hr />         
            <label>MAIL ID</label>
            <input type="text" name="email" autoComplete="this.state.email" placeholder=" Enter Email" value={email} onChange={this.onChange} />
            <br />
            <label>Password</label>
            <input type="password" name="password" autoComplete="current-password" placeholder="Enter Password" value={password} onChange={this.onChange}  />
           
                        <ButtonToolbar>
            <Button bsSize="large" bsStyle="primary" type="submit" name="submit" block > Login </Button>
            </ButtonToolbar>
            </font>
                        </div>
            </form>
            <nav className="navbar-default navbar-sticky-bottom" >
            <div >
   </div>
       <footer className="footer5" >
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
