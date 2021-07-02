import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Service from './components/services/service';
import Contact from './components/contact/Contact'
import NothingHere from './components/404/nothingHere'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route path="/services" exact component={Service}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NothingHere}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
