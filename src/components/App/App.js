import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";
import Form from "../Form";
import Header from "../Header";
import Main from "../Main";
import Error from "../Error";
import Profile from "../Profile";
import SearchForm from "../SearchForm";

import Promo from "../Promo";
import Navtab from "../Navtab";
import AboutProject from "../AboutProject";
import Techs from "../Techs";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Footer from "../Footer";
import Movies from "../Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

export default function App() {
 return (
  <div className="App">
   <Switch>
    <Route exact path="/">
     <Header />
     <Main>
      <Promo />
      <Navtab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
     </Main>
     <Footer />
    </Route>
    <Route path="/sign-up">
     <Main>
      <Form>
       <Register />
      </Form>
     </Main>
    </Route>
    <Route path="/sign-in">
     <Main>
      <Form>
       <Login />
      </Form>
     </Main>
    </Route>
    <Route path="/movies">
     <Header />
     <Main>
      <SearchForm />
      <Movies />
     </Main>
     <Footer />
    </Route>
    <Route path="/saved-movies">
     <Header />
     <Main>
      <SearchForm />
      <SavedMovies />
     </Main>
     <Footer />
    </Route>
    <Route path="/profile">
     <Header />
     <Main>
      <Profile />
     </Main>
    </Route>
    <Route path="/*">
     <Error message="Страница не найдена" status="404" />
    </Route>
    {/* <Route>
          {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
        </Route> */}
   </Switch>
  </div>
 );
}
