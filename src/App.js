import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"

import Menubar from "./components/menubar"
import Page1 from "./components/page1"
import Page2 from "./components/page2"

function App() {
  return (
    <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Menubar} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        {/* <Route component={Error} /> */}
      </Switch>
    </HashRouter>
  </Router>
  );
}

export default App;