import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Admin/AdminRegPage';
import Aplogin from './Admin/Aplogin';
import Home from './HomePage';
import Plogin from './principal/Plogin';
import Pregister from './principal/Pregister';
import HODRegister from './HOD/HodRegister';
import HODLogin from './HOD/HODLogin';
import Issue from './Admin/Issue';
import Display from './Display';
import ThankYou from './Thankyou';
class App extends Component {
   render() {
      return (
         <Router>
            <div>              
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Register' component={Form} />
                  <Route exact path='/Login' component={Aplogin} />
                  <Route exact path='/Pregister' component={Pregister} />
                  <Route exact path='/Plogin' component={Plogin} />
                  <Route exact path='/HODRegister' component={HODRegister} />
                  <Route exact path='/HODLogin' component={HODLogin} />
                  <Route exact path='/Issue' component={Issue} />
                  <Route exact path='/Display' component={Display} />
                  <Route exsct path='/ThankYou' component={ThankYou} />
               </Switch>
            </div>
        </Router>
      );
   }
}
export default App;

