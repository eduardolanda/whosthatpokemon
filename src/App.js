import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";
import logo from "./logoEduardo.png";
import Nav from "./Nav";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Author from "./views/Author";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "5em",
              position: "fixed",
              left: "0",
              top: "0",
              margin: "10px"
            }}
          />
        </Link>
        <Nav />
        <Route
          render={({ location }) => {
            const { pathname, key } = location;
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/author" component={Author} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            );
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
