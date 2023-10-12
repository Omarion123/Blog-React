import "./App.css";
import Home from "./components/Home.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="main-content">
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/contactus">
              <Contactus />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
