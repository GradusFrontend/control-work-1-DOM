/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// let sorted = movieDB.movies.sort()

let addChilds = document.querySelectorAll('.promo__adv div, img')
let janre = document.querySelector('.promo__genre')

addChilds.forEach(item => item.remove())

janre.innerHTML = 'драма'

let bg = document.querySelector('.promo__bg')

bg.style.background = `url("./img/bg.jpg") no-repeat center / cover`

let listBox = document.querySelector('.promo__interactive-list')

let title = document.querySelector('.promo__title')
let imdb = document.querySelector('.imdb')
let kinopoisk = document.querySelector('.kinopoisk')
let descr = document.querySelector('.promo__descr')

function reload () {
    listBox.innerHTML = ''
    for (let item of movies) {
        let idx = movies.sort().indexOf(item) + 1
        let list = document.createElement('li')
        let deleteDiv = document.createElement('div')
    
        list.classList.add('promo__interactive-item')
        deleteDiv.classList.add('delete')
    
        listBox.append(list)
        list.append(idx + '. ' + item.Title)
        list.append(deleteDiv)

        list.onclick = () => {
            bg.style.background = `url(${item.Poster}) no-repeat center / cover`
            janre.innerHTML = item.Genre
            title.innerHTML = item.Title
            descr.innerHTML = item.Plot
            imdb.innerHTML = 'IMDb: ' + item.imdbRating
            kinopoisk.innerHTML = 'Кинопоиск: ' + item.Metascore
        }

        deleteDiv.onclick = () => {
            movies.splice(idx - 1, 1)
            reload()
        }
    }
}

reload()