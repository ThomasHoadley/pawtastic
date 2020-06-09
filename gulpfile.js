var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var babel = require("gulp-babel");

var paths = {
	js: {
		in: ["node_modules/babel-polyfill/dist/polyfill.js", "./assets/js/main.js"],
		out: "./",
		watch: ["./assets/js/*.js", "./assets/js/**/*.js"],
	},
};

gulp.task("styles", () => {
	return gulp
		.src("assets/sass/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(minify({ compatibility: "ie10" }))
		.pipe(gulp.dest("./"));
});

gulp.task("js", function () {
	return gulp
		.src(paths.js.in)
		.pipe(babel({ presets: ["@babel/preset-env"] }))
		.pipe(sourcemaps.init())
		.pipe(concat("main.js"))
		.pipe(uglify())
		.pipe(sourcemaps.write(paths.js.out))
		.pipe(gulp.dest(paths.js.out))
		.on("error", function (event) {
			console.log("Error: " + event);
		});
});

gulp.task("watch", () => {
	gulp.watch(["assets/sass/**/*.scss", "assets/js/**/*.js"], (done) => {
		gulp.series(["styles", "js"])(done);
	});
});
