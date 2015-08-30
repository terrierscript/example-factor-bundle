var gulp = require('gulp')
var path = require("path")
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var glob = require("glob")
var del = require("del")
var mkdirp = require("mkdirp")
var factor = require('factor-bundle')

var dest = './output/'

gulp.task('clean', function() {
  del(dest)
})

gulp.task('browserify', function() {
  var entries = "./src/entry/**/*"
  var outputDir = "./output/entry"
  var files = glob.sync(entries, {nodir: true})
  var outputs = files.map(function(file){
    return file.replace("./src/entry", outputDir)
  })
  mkdirp.sync(outputDir)
  browserify({
    entries: files,
    extensions: ['js', 'jsx'],
  })
  .transform(babelify.configure({
    ignore: /vendor/,
  }))
  .plugin(factor, {
    output: outputs
  })
  .bundle()
  .pipe(source("common.js"))
  .pipe(gulp.dest(path.join(dest, "client")))
})

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['browserify'])
})

gulp.task('default', ['browserify', 'watch'])