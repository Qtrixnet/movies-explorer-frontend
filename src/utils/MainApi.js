//* Класс для взаимодействия с сервером
class Api {
  constructor(data) {
    this._baseUrl = data.serverUrl;
  }

  //* Проверка статуса запроса
  _requestResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Что-то пошло не так: Ошибка ${res.status} - ${res.statusText}`
      );
    }
  }

  //* Запрос данных пользователя
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на редактирование данных пользователя
  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на добавление фильма
  addNewMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration, 
        year: data.year, 
        description: data.description,
        image: data.image,
        trailer: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._requestResult(res));
  }

  //* Запрос на удаление фильма
  deleteMovie(data) {
    return fetch(`${this._baseUrl}/movies/${data}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }).then((res) => this._requestResult(res));
  }

  login(email, password){
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
      })
  };

  register(name, email, password){
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
      .then(res => {
        return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
      })
  };
}

const mainApi = new Api({
  // serverUrl: "https://api.mesto-qtrixnet.nomore.nomoredomains.club",
  serverUrl: "http://localhost:3001",
});

export default mainApi;
