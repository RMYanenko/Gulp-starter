import gulp from "gulp";

import { path } from "./gulp/config/path.js";

//import plugins
import { plugins } from "./gulp/config/plugins.js"

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
};

//Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";


//Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
}

//основные задачи
const mainTasks = gulp.parallel(copy, html, scss);

//Последовательность  выполнение задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));

//Сценарий по умолчанию
gulp.task("default", dev);
