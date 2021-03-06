import React, {component} from 'react';
import './p1.css';
import axios from 'axios';
import {ButtonToolbar,Button,Navbar,Nav,NavItem} from 'react-bootstrap';

export default class Pregister extends React.Component{
    constructor() {
        super();
        this.state = {
          firstName: '',
            email: '',
            password:'',
            reenterpassword:'',
            role: 'principal'
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
        console.log("ok")
        //   console.log("entered")
        e.preventDefault();
        // get our form data out of state
        const data = this.state;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(this.state.email) === true & this.state.password === this.state.reenterpassword) {
          axios.post('http://localhost:80/user/register', data) 
          .then((result) => {
            
            //access the results here....
            alert("sucessfully created");
            this.props.history.push('/Plogin');
                // console.log(result)
          })
          // .then((route) => {
          //   <Route exact path="/Plogin" component={Plogin} />


          // })

        } else {
          alert("invalid password or email !")
        }
        
        // console.log(this.state)
        
      }

    render(){
        const { firstName, email, password,reenterpassword,role } = this.state;

        return (
          <div>
              <nav  className="navbar nav-tabs navbar-default  navbar-fixed-top shrinkable bg-sucess"  >

<Navbar.Header>
    <strong> Disciplinary Issues Tracking </strong>
    </Navbar.Header>

<Nav  pullRight>

        <NavItem eventKey="5" href="/Login">
         <Button  className="bt" bsStyle="primary" bsSize="large" vertical="true"  block> Login </Button>
        </NavItem>
        <NavItem eventKey="2" href="/Pregister" >
         <Button className="bt" bsStyle="primary" bsSize="large"  block> SIGNUP</Button>
        </NavItem>
         </Nav>
         </nav>
            <form onSubmit={this.onSubmit} className="pr">
            <div align="right">
    <label > If Not principal Please Register Here </label> 
    <Button bsSize="large" bsStyle="primary" href="/HODRegister" align="right"> HOD </Button>
    </div>
                 <div className="loginp">
                        <h1 > Register</h1>
                        <font size='4'>
                         <label>FirstName</label>
                        <input type="text" name="firstName" autoComplete="true" placeholder="Enter FirstName" value={firstName} onChange={this.onChange} required />
                        <label>Email</label>
                        <input type="text" name="email" autoComplete='email' placeholder="Enter Mail id" value={email} onChange={this.onChange} required/>
                        <label>password</label>
                        <input type="password" name="password" autoComplete='new-password' placeholder="Enter Password" value={password} onChange={this.onChange} required />
                        <label>confirm password</label>
                        <input type="password" name="reenterpassword" autoComplete='new-password' placeholder="Enter Password" value={reenterpassword} onChange={this.onChange} required />
                        <ButtonToolbar>
                        <Button  type="submit" bsStyle="primary" bsSize="large" block> REGISTER </Button>
                        </ButtonToolbar>
                        
                        </font>
                    </div>
            </form>
            <nav className="navbar-default navbar-sticky-bottom" >
         <div >
</div>
    <footer className="footer4" >
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
