import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";

import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer position='top-center' />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/add' component={AddEdit} />
        <Route path='/update/:id' component={AddEdit} />
        <Route path='/view/:id' component={View} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
