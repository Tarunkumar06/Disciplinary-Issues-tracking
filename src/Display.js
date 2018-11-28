import React,{Component} from 'react';
import {Table,Button} from 'react-bootstrap';
import axios from 'axios';
import './Display.css';
export default class Display extends React.Component{
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind();
    this.getComplaints();
    var temp = JSON.parse(sessionStorage.getItem("userData"))
        console.log(temp.role)
        if(temp.role === 'ADMIN') {
            this.adminRole = true
        } else {
            this.adminRole = false
        }
    this.state = { 
      complaints: [],
      nm : ''
    };
  }
  function (disable) {
    if(this.adminRole='ADMIN'){
      document.getElementById('delete').disabled=false
    }
    else{
      document.getElementById('delete').disabled=true
    }

    
  }
  deleteHandler(obj) {
    console.log("hgvhg")
    // e.preventDefault();
    console.log(obj)
    axios.delete('http://localhost:80/delete/'+obj.id+'/complaints')
          .then(res => {
this.getComplaints() 
         })
    };
    
      getComplaints() {
        axios.get(`http://localhost:80/get/complaints`)
          .then(res => {
            // console.log(res.data)
            // const complaints = res;
            this.setState({ complaints: res.data });
          })
      }
      

      // handleClick(id) {
      //   console.log(id)
      // }

      onChange = (e) => {
        console.log(e.target.value)
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        // console.log(e.target.value)
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state)
      }
      
    
    render() {
  
        return (
          <div >
            
          <div className="bodyw">
                 
         <div  >< Button align="left" bsStyle="primary"  bsSize="large"href="/Login" > Logout </Button> 
    <Button align="right" bsStyle="info"  bsSize="large" href="/Issue" > Add Issues </Button></div>
               
       <Table className="Table"    bordered >           
  <thead className="thead-dark">
    <tr>
      <th >Regd_no</th>
      <th>Year Of Study</th>
        <th>Location</th>
      <th>Department</th>
      <th> Disciplinary Issue</th>
      <th> Status </th>
        {
                  this.adminRole ? 
                          <th id="delete" > Delete </th>
                   : <div></div>
                              }  
    </tr>
  </thead>
  <tbody>
    
           { 
             this.state.complaints.map((obj, i) => {
               return (
                <tr key={i}>
                <td>{obj.RegistrationNum}</td>
                <td>{obj.YOST}</td>
                <td>{obj.Locate}</td>
                <td>{obj.Depart}</td>
                <td>{obj.Issues}</td>
                <td>{obj.status}</td>
                {
                  this.adminRole ? <div>
                  <td><Button id="delete" onClick={()=>this.deleteHandler(obj)} bsStyle="primary" bsSize="large"> Delete </Button></td>
                  </div> : <div></div>
                              }  
                             

              </tr>
               )
             
           }) 
          }

</tbody> 
  </Table> 
  </div>
  <nav className="navbar-default navbar-sticky-bottom" >
{/* </div> */}
<footer className="footer8" >
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
 &copy; {(new Date().getFullYear())} Copyright: <a href="www.byteorigin.com"> Byteorigin.com </a>
 </div>        
</footer>
</nav> 
</div>
        )
    }
}
