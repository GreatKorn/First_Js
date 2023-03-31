const number_of_films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personal_movieDB = {
    count: number_of_films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('Оценка фильма?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('Оценка фильма?', '');

personal_movieDB.movies[a] = b;
personal_movieDB.movies[c] = d;

console.log(personal_movieDB);