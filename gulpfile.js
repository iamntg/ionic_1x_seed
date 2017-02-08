var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var inject = require('gulp-inject');
var ngSort = require('gulp-angular-filesort');
var bower = require('main-bower-files');
var sequence = require('run-sequence');
var serve = require('gulp-serve');
var uglify = require('gulp-uglify'); 
var template = require('gulp-template-compile');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-rimraf');
var templateCache = require('gulp-angular-templatecache');

var paths = {
	sass: ['./scss/**/*.scss'],
	script: ['./src/app/**/*.js'],
	templates: ['./src/app/**/*.html'],
	assets: ['./src/assets/**/*.*'],
	lib: ['./src/lib/**/*.*'],
	manifest: ['./src/manifest.json']
};

gulp.task('default', ['build']);

//for development-build
gulp.task('build', function (done) {
	sequence('clean', ['script', 'sass', 'templates'], 'rename', 'bower', 'assets', 'inject', 'manifest', done);
});

//for release-build
gulp.task('release', function (done) {
	sequence('clean', ['minfy-js', 'sass', 'templates-js'], 'rename', 'bower', 'assets', 'inject', 'manifest', done);
});


gulp.task('clean', function (done) {
	return gulp.src('./www/*', { read: false }) // much faster 
    .pipe(clean());
});

gulp.task('inject', function (done) {
	var target = gulp.src('./www/index.html');
	var sources = gulp.src(['./www/app/**/*.js']);

	return target.pipe(inject(sources.pipe(ngSort()), {
			relative: true,
			ignorePath: '../www/'
		}))
		.pipe(inject(gulp.src([, './www/css/**/*.css']), {
			relative: true,
			ignorePath: '../www/'
		}))
		.pipe(gulp.dest('./www'));

})

gulp.task('script', function (done) {
	gulp.src(paths.script)
		.pipe(gulp.dest('./www/app/'))
		.on('end', done);
});

gulp.task('templates', function (done) {
	gulp.src(paths.templates)
		.pipe(gulp.dest('./www/app/'))
		.on('end', done);
});

gulp.task('templates-js', function (done) {
	gulp.src(paths.templates)
		.pipe(templateCache('templates.js', {
			module: 'TLink.template',
			root: 'app',
			standalone: true
		}))
		.pipe(gulp.dest('./www/app/'))
		.on('end', done);
});

gulp.task('minfy-js', function (done) {
	gulp.src(paths.script)
		.pipe(ngSort())
		.pipe(concat('tlink.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(gulp.dest('./www/app/'))
		.on('end', done);
});

gulp.task('rename', function (done) {
	gulp.src("./src/index.min.html")
		.pipe(rename("index.html"))
		.pipe(gulp.dest("./www"))
		.on('end', done);
});

gulp.task('assets', function (done) {
	gulp.src(paths.assets)
		.pipe(gulp.dest('./www/assets/'))
		.on('end', done);
});

gulp.task('bower', function (done) {
	gulp.src(paths.lib)
		.pipe(gulp.dest('./www/lib/'))
		.on('end', done);
});

gulp.task('manifest', function (done) {
	gulp.src(paths.manifest)
		.pipe(gulp.dest('./www/'))
		.on('end', done);
});

/*gulp.task('bower', function() {
    return gulp.src(bower({includeDev: true}), {base: './src/lib/'})
      .pipe(gulp.dest('./www/lib/'));
});*/

gulp.task('sass', function (done) {
	gulp.src('./scss/ionic.app.scss')
		.pipe(sass())
		.on('error', sass.logError)
		.pipe(minifyCss({
			keepSpecialComments: 0
		}))
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest('./www/css/'))
		.on('end', done);
});

gulp.task('serve', serve('www'));

gulp.task('watch', function () {
	gulp.watch([paths.sass, paths.script, paths.assets], ['build']);
});

gulp.task('install', ['git-check'], function () {
	return bower.commands.install()
		.on('log', function (data) {
			gutil.log('bower', gutil.colors.cyan(data.id), data.message);
		});
});

gulp.task('git-check', function (done) {
	if (!sh.which('git')) {
		console.log(
			'  ' + gutil.colors.red('Git is not installed.'),
			'\n  Git, the version control system, is required to download Ionic.',
			'\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
			'\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
		);
		process.exit(1);
	}
	done();
});