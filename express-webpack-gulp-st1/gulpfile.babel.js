
import gulp from 'gulp';
import browserSync from 'browser-sync';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const reload = browserSync.reload;
const _path = {
  src: {
    js: "./public/src/js/**/*.js",
    scss:"./public/src/scss/**/*.{scss,css}",
  },
  dist: {
    js: "./public/dist/js",
    css:"./public/dist/css",
  }
}

const setting = {
  styles: {
    scss_option: {
      outputStyle: "compressed",
      indentType: "tab",
      indentWidth: 1,
      precision: 3,
      sourceComments: false,
      errLogToConsole: true,
      // importer: moduleImporter({ basedir: path.join(__dirname, 'public/src/assets/scss/') }) 
      // includePaths: [_path.src]
    },
    rootFontSize: 16
  },
}
const browserOpts = {
  proxy: 'http://localhost:3000',
  port: 9000,
  open: false
};

gulp.task('nodemon', () => {
  let restarted = false;
  browserSync.create();
  browserSync.init(null,browserOpts);

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
  gulp.watch(_path.src.js, [`scripts`]);
  gulp.watch(_path.src.scss, [`styles`]);
  // gulp.watch(_path.img.src, [`imgmin`]);
  gulp.watch(
    [
      `views/**/*.{ejs,html}`,
      `routes/**/*.js`,
      `app.js`
    ],
    reload);
});


gulp.task('scripts', () => {
  return gulp.src(_path.src.js)
    .pipe(babel({
      presets: ["es2015"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(_path.dist.js));
});

gulp.task('styles', () => {
  return gulp.src(_path.src.scss)
    .pipe(sass(setting.styles.scss_option).on('error', sass.logError))
    .pipe(autoprefixer('last 3 versions'))
    .pipe(gulp.dest(_path.dist.css));
});

const process_default = [
  `nodemon`,
  `scripts`,
  `styles`,
  `watch`
];

gulp.task(`default`, process_default, () => {
  console.log(`Gulp is running: Development! port : ${browserOpts.port}`);
  
});
