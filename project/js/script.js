/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// let sorted = movieDB.movies.sort()

let addChilds = document.querySelectorAll('.promo__adv div, img')
let janre = document.querySelector('.promo__genre')

addChilds.forEach(item => item.remove())

janre.innerHTML = 'драма'

let bg = document.querySelector('.promo__bg')

bg.style.background = `url("./img/bg.jpg") no-repeat center / cover`

let listBox = document.querySelector('.promo__interactive-list')


for (let item of movieDB.movies.sort()) {
    let idx = movieDB.movies.sort().indexOf(item) + 1
    let list = document.createElement('li')
    let deleteDiv = document.createElement('div')

    list.classList.add('promo__interactive-item')
    deleteDiv.classList.add('delete')

    listBox.append(list)
    list.append(idx + '. ' + item)
    list.append(deleteDiv)
}

let deleteDivs = document.querySelectorAll('.delete')
let lists = document.querySelectorAll('.promo__interactive-item')

deleteDivs.forEach((item, idx) => {
    item.onclick = () => {
        lists[idx].remove()
        // numeration()
    }
})
    

// function numeration() {
//     let listFunc = document.querySelectorAll('.promo__interactive-item')
//     for (let i = 0; i < listFunc.length; i++) {
//         listFunc[i].innerHTML = i + 1 + '. ' + sorted[i]
//     }
// }