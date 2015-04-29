/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    devLibJs: {
      files: [{
        expand: true,
        flatten: true,
        cwd: './bower_modules/',
        src: [
          '*/dist/**/*.min.js',
          '*/dist/**/*.min.map',
          '*/*min.js',
          '*/*min.map'
        ],
        dest: '.tmp/public/js/dependencies/'
      }]
    },
    devLibCss: {
      files: [{
        expand: true,
        flatten: true,
        cwd: './bower_modules/',
        src: [
          '*/dist/**/*.min.css',
          '*/dist/**/*.map',
          '!*/dist/**/*theme*.min.css',
          'fontawesome/css/*.min.css',
          'fontawesome/css/*.map'
        ],
        dest: '.tmp/public/css/'
      }]
    },
    devLibFont: {
      files: [{
        expand: true,
        flatten: true,
        cwd: './bower_modules/',
        src: [
          '*/fonts/*.ttf',
          '*/fonts/*.eot',
          '*/fonts/*.woff',
          '*/fonts/*.woff2',
          '*/fonts/*.svg'
        ],
        dest: '.tmp/public/fonts/'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
