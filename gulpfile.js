var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images', function () {
  return gulp.src('images_src/*.jpg')
    .pipe($.responsive({
      '*': [
      {
        width: 2400,
        rename: {
          suffix: '_large_2x_2400w',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 1200,
        rename: {
          suffix: '_large_1x_1200w',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 1500,
        rename: {
          suffix: '_medium_2x_1500w',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 750,
        rename: {
          suffix: '_medium_1x_750w',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 500,
        rename: {
          suffix: '_small_500w',
          extname: '.jpg',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 2400,
        rename: {
          suffix: '_large_2x_2400w',
          extname: '.webp',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 1200,
        rename: {
          suffix: '_large_1x_1200w',
          extname: '.webp',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 1500,
        rename: {
          suffix: '_medium_2x_1500w',
          extname: '.webp',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 750,
        rename: {
          suffix: '_medium_1x_750w',
          extname: '.webp',
        },
        withoutEnlargement: true,
      }, 
      {
        width: 500,
        rename: {
          suffix: '_small_500w',
          extname: '.webp',
        },
        withoutEnlargement: true,
      }, 

      ],
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 40,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
      // Do not emit the error when image is enlarged.
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('img'));
});