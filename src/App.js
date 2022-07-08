import React, { Component } from "react";
import routes from "../src/routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

//import style
import "./assets/css/pe-icon-7.css";

import "./assets/scss/themes.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //    animation() {
  //  let el = document.querySelector("#stars");
  
  //  el.addEventListener("mousemove", (e) => {
  //  el.style.backgroundPositionX = -e.offsetX + "px";
  //  el.style.backgroundPositionY = -e.offsetY + "px";
  //  });
  //  alert("gllo")
  // }
  // componentWillMount(){
  //   let el = document.querySelector("#stars");
         
  //   el.addEventListener("mousemove", (e) => {
  //   el.style.backgroundPositionX = -e.offsetX + "px";
  //   el.style.backgroundPositionY = -e.offsetY + "px";
  //   });
  //   alert("gllo")
  // }
  
  render() {
    // useEffect(() => {
    //   console.log('hello world');
    // }, []);
    
   
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
