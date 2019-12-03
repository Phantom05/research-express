const gulp = require ('gulp');
const browserSync = require('browser-sync');
const nodemon     = require('gulp-nodemon');
const babel       = require('gulp-babel');
const reload      = browserSync.reload;


const _path={
  src:{
    js:"./public/src/js/**/*.js"
  },
  dist:{
    js:"./public/dist/js"
  }
}
const browserOpts = {
  proxy: 'http://localhost:3000',
  port: 9000,
  open: false
};

gulp.task('nodemon', () => {
  let restarted = false;
  browserSync.create();
  browserSync.init(browserOpts);

  return nodemon({
    exec: 'babel-node  ./bin/www'
  })
    .on('start', () => {
      if (restarted) {
        setTimeout(() => {
          browserSync.reload();
        }, 4000);
      }
    })
    .on('crash', function () {
      console.error('Application has crashed!\n')
      stream.emit('restart', 5) // restart the server in 10 seconds
    })
    .on('exit', function () {
      if (!restarted) {
        console.log("KILLING NODEMON PROCESS ID:" + process.pid);
        process.kill(process.pid);
      }
      restarted = true;
    })
    .on('restart', () => {
      restarted = true;
    });
});

gulp.task(`watch`, () => {
  gulp.watch(_path.src.js, [`babel`]);
  // gulp.watch(_path.styles.src, [`styles`]);
  // gulp.watch(_path.img.src, [`imgmin`]);
  gulp.watch(
    [
      `views/**/*.{ejs,pug,html}`,
      `routes/**/*.js`,
      `app.js`
      
    ],
    reload);
});


gulp.task('babel', () => {
  return gulp.src(_path.src.js)
    .pipe(babel({
      presets:["es2015"]
    }))
    .pipe(gulp.dest(_path.dist.js));
});

const process_default = [
  `nodemon`,
  `babel`,
  `watch`
];

gulp.task(`default`,process_default, () => {
  console.log('Gulp is running: Development!');
});
