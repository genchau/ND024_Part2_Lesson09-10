var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('images_src/*.jpg')
    .pipe($.responsive({
      '*': [
      {
        width: 1200,
        rename: {
          suffix: '-1200px',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 1600,
        rename: {
          suffix: '-1600px',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 

      ],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 50,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
      // Do not emit the error when image is enlarged.
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('img'));
});