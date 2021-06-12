import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from "../../utils/MainApi";
import Preloader from '../Preloader';
import Register from "../Register";
import Login from "../Login";
import Header from "../Header";
import Main from "../Main";
import Error from "../Error";
import Profile from "../Profile";
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

  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isDataLoad, setIsDataLoad] = useState(false);
  const [loginErrorText, setLoginErrorText] = useState({});
  const [registerErrorText, setRegisterErrorText] = useState({});
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState('');

  function usePageViews() {
    let location = useLocation();
    useEffect(() => {
      setCurrentLocation(location.pathname)
    }, [location]);
  }

  usePageViews();

  //* Вход в систему
  function handleLogin({ email, password }) {
    setIsDataLoad(true)
    mainApi.login(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch(err => {
        setLoginErrorText(err);
        console.log(err);
      })
      .finally(() => { setIsDataLoad(false) })
  }

  //* Выход из системы
  const handleSignOut = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  //* Регистрация пользователя
  function handleRegister({ name, email, password }) {
    setIsDataLoad(true)
    mainApi.register(name, email, password)
      .then(data => {
        if (data) {
          history.push('/movies');
        }
      })
      .catch(err => {
        setRegisterErrorText(err);
        console.log(err);
      })
      .finally(() => { setIsDataLoad(false) })
  }

  //* Проверка токена и авторизация пользователя
  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      mainApi.getUserInfo()
        .then(data => {
          if (data) {
            setLoggedIn(true)
          }
        })
        .catch(err => { console.log(err); })
    }
  }, [history]);

  //* Получение информации о пользователе
  useEffect(() => {
    if (loggedIn) {
      setIsDataLoad(true)
      mainApi.getUserInfo()
        .then(res => { setCurrentUser(res); })
        .catch(err => { console.log(err); })
        .finally(() => { setIsDataLoad(false) })
    }
  }, [loggedIn]);

  //* Получение массива сохраненных фильмов
  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((data) => {
          setSavedMoviesList(data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [loggedIn]);

  //* Редактирование данных пользователя
  function handleUpdateUser(newUserData) {
    console.log(newUserData)
    setIsDataLoad(true);
    mainApi.updateUserInfo(newUserData)
      .then(res => { setCurrentUser(res); })
      .catch(err => { console.log(err) })
      .finally(() => { setIsDataLoad(false) });
  }

  //* Сохранение фильма
  function handleSaveMovie(movie) {
    mainApi.addNewMovie(movie)
      .then(newMovie => {
        setSavedMoviesList([newMovie, ...savedMoviesList]);
      })
      .catch(err => console.log(err))
  };

  //* Удаление фильма
  function handleDeleteMovie(movie) {
    const savedMovie = savedMoviesList.find((item) => {
      if (item.movieId === movie.id || item.movieId === movie.movieId) {
        return item
      }
    })
    mainApi.deleteMovie(savedMovie._id)
      .then((res) => {
        const newMoviesList = savedMoviesList.filter((m) => {
          if(movie.id === m.movieId || movie.movieId === m.movieId) {
            return false
          } else {
            return true
          }
        })
        setSavedMoviesList(newMoviesList);
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header path="/" loggedIn={loggedIn} />
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
              <Register onRegister={handleRegister} isDataLoad={isDataLoad} errorText={registerErrorText} />
            </Main>
          </Route>
          <Route path="/sign-in">
            <Main>
              <Login onLogin={handleLogin} isDataLoad={isDataLoad} errorText={loginErrorText} />
            </Main>
          </Route>
          <Route path="/movies">
            {loggedIn ? '' : <Redirect to="/" />}
            <Header loggedIn={loggedIn} />
            <Main>
              <Movies
                savedMoviesList={savedMoviesList}
                onLikeClick={handleSaveMovie}
                onDeleteClick={handleDeleteMovie}
              />
            </Main>
            <Footer />
          </Route>
          <Route path="/saved-movies">
            {loggedIn ? '' : <Redirect to="/" />}
            <Header loggedIn={loggedIn} />
            <Main>
              <SavedMovies savedMoviesList={savedMoviesList} onDeleteClick={handleDeleteMovie} />
            </Main>
            <Footer />
          </Route>
          <Route path="/profile">
            {loggedIn ? '' : <Redirect to="/" />}
            <Header loggedIn={loggedIn} />
            <Main>
              {isDataLoad ?
                <Preloader />
                :
                <Profile user={currentUser} onSignOut={handleSignOut} onEditProfile={handleUpdateUser} />}
            </Main>
          </Route>
          <Route path="/*">
            <Error message="Страница не найдена" status="404" />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}
