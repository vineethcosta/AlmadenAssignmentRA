import React, { useEffect, createContext, useReducer, useContext } from 'react';
import NavBar from './components/NavBar'
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './screens/Home'
import { AccountBox } from "./components/accountBox";
import ContactUs from './screens/ContactUs'
import Donate from './screens/Donate'
import Events from './screens/Events'
import WhoWeAre from './screens/WhoWeAre'
import PhotoGallery from './screens/PhotoGallery'

import LeaderOfAym from './screens/LeaderOfAym'
import MembersReflections from './screens/MembersReflections'
import Auditions from './screens/Auditions'
import ChristmasConcert from './screens/ChristmasConcert'
import Award from './screens/Award'

import styled from "styled-components";
import MonthlyNewsLetter from './screens/MonthlyNewsLetter'
import Footer from './components/Footer'

import { reducer, initialState } from "./reducers/userReducer";
import SideBar from './components/SideBar';
export const UserContext = createContext()

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!history.location.pathname.startsWith("/login"))
     { history.push("/login"); }
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/login" >  <AppContainer>
        <AccountBox />
      </AppContainer></Route>
      {state &&
      <div>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/contactus">
        <ContactUs />
      </Route>
      <Route path="/donate">
        <Donate />
      </Route>
      <Route path="/monthlynewsletter">
        <MonthlyNewsLetter />
      </Route>
      <Route path="/photogallery">
        <PhotoGallery />
      </Route>
      <Route path="/whoweare">
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" >
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <WhoWeAre />
              </div></div></div></section>
      </Route>
      <Route path="/events">
        <Events />
      </Route>
      <Route path="/leaderofaym" >
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <LeaderOfAym />
              </div></div></div></section>

      </Route>
      <Route path="/membersreflections">
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <MembersReflections />
              </div></div></div></section>
      </Route>
      <Route path="/auditions">
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <Auditions />
              </div></div></div></section>
      </Route>
      <Route path="/christmasconcert">
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <ChristmasConcert />
              </div></div></div></section>
      </Route>
      <Route path="/award">
        <section className="page-section" id="about">
          <div className="container" >
            <div className="row" style={{ textAlign: 'center' }}>
              <div className="col-lg-4 text-center" >
                <SideBar />
              </div>
              <div className="col-lg-8 text-center" >
                <Award />
              </div></div></div></section>
      </Route>
      </div>}
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
