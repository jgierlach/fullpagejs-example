var gulp = require('gulp');

var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});

gulp.task("watch", function(done){
    browserSync.reload()
    done()
})

gulp.task("build", function() {

});

gulp.task("develop", ["browser-sync"], function() {
    gulp.watch("src/**/*", ["watch"]);
});


