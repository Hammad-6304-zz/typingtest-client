import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom"; 
import HomepageLayout from '../components/home'
import TypingTest from '../components/typingTest'
import Score from './scores'
import Learn from './Learn'
class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* <HeaderTop /> */}
        {/* <MenuTop /> */}
        {/* <Background />
        <CenteredPopup /> */}
        

        {/* <HomepageLayout /> */}
        {/* <TypingTest /> */}
        {/* <Score /> */}
        <Switch>

        <Route path="/HighScore" component={Score} />
        <Route  path="/typingTest" component={TypingTest} />
        <Route  path="/learn" component={Learn} />
        <Route exact  path="/" component={HomepageLayout} />

        </Switch>


        
      </div>
    );
  }
}

export default Main;
