const babel = require('gulp-babel');
const Cache = require('gulp-file-cache');

let cache = new Cache();

const SRC = {
  JS: DIR.SRC + '/js/*.js',
  CSS: DIR.SRC + '/css/*.css',
  HTML: DIR.SRC + '/*.html',
  IMAGES: DIR.SRC + '/images/*',
  SERVER: 'server/**/*.js'
};

const DEST = {
  JS: DIR.DEST + '/js',
  CSS: DIR.DEST + '/css',
  HTML: DIR.DEST + '/',
  IMAGES: DIR.DEST + '/images',
  SERVER: 'appt'
};

gulp.task('babel', () => {
  return gulp.src(SRC.SERVER)
    .pipe(cache.filter())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(cache.cache())
    .pipe(gulp.dest(DEST.SERVER));
});