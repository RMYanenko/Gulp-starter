import replace from 'gulp-replace'; //Поиск и замена
import plumber from 'gulp-plumber'; //Обработка ошибок
import notify from 'gulp-notify'; // Подсказки
import browserSync from 'browser-sync';

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync
}