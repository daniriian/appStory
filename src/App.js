
import React, { Component } from "react";
import "./App.css";
import { HashRouter , Switch, Route } from "react-router-dom";
import Contact from "./components/contact";
import Prezentare from "./components/prezentare";
import HomePage from "./components/home";
import TaxeTimbru from "./components/taxe";
import Organizare from "./components/organizare";
import Meniu from './components/meniu';
import Footer from './components/Footer/footer';
import Rapoarte from './components/rapoarte';
import Hotarari from './components/hotarari';
import Concursuri from './components/concursuri';
import Declaratii from './components/declaratii';
import InfoPublice from "./components/infoPublice";
import Comunicate from "./components/comunicate";
const { detect } = require('detect-browser');
const browser = detect();


class App extends Component {
  render() {
    console.log(browser.version.substr(0,2).toString);
    if (browser.name === 'ie' && browser.version.substr(0,2) ==='9') {
      return this.renderForNoCompatibility();
    }
    else return this.renderAll();
  }
  renderForNoCompatibility() {
    return (
      <div>
        <p>Acest site nu suporta aceasta versiune de browser. Va rugam sa updataţi browserul dumneavostră sau să folositi Chorme sau FireFox </p>
      </div>
    )
  }

  renderAll() {
    const baseUrl = process.env.PUBLIC_URL;
    console.log({baseUrl});
    return (
      <React.Fragment>

        <Meniu />
        <HashRouter basename={baseUrl} component={App}>
          <Switch>
            <Route exact path={"/organizare"} component={Organizare} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/taxe"} component={TaxeTimbru} />
            <Route exact path={"/prezentare"} component={Prezentare} />
            <Route exact path={"/rapoarte"} component={Rapoarte} />
            <Route exact path={"/hotarari"} component={Hotarari} />
            <Route exact path={"/concurs"} component={Concursuri} />
            <Route exact path={"/declaratii"} component={Declaratii} />
            <Route exact path={"/infoPublice"} component={InfoPublice} />
            <Route exact path={"/comunicate"} component={Comunicate} />
            <Route exact path={"/"} component={HomePage} />
          </Switch>
        </HashRouter >
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
