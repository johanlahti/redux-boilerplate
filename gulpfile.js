var gulp = require('gulp');
var browserify = require('browserify');
var babel = require('babelify');
var react = require('react');
var concat = require("concat");
var fs = require("fs");
var source = require('vinyl-source-stream');

// var sourcemaps = require('gulp-sourcemaps');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var watchify = require('watchify');

var path = {
	js: ["./src/**/*.jsx"],
	dest: "./build",
	indexHtml: './src/index.html'
};



gulp.task("html", function() {
	return gulp
		.src([path.indexHtml])
			.pipe(gulp.dest(path.dest));
});



gulp.task("js", function() {
	return browserify({
		entries: "./src/index.jsx",
		debug: true
	})
		.transform("babelify", {presets: ["es2015", "react"]}).bundle()
	.pipe(source("bundle.js"))
	// .pipe(concat("bundle.js"))
	.pipe(gulp.dest(path.dest))
		// .pipe(fs.createWriteStream("bundle.js"));
});


gulp.task("default", ["html", "js"]);