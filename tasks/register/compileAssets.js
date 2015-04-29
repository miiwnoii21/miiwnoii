module.exports = function(grunt) {
  grunt.registerTask('compileAssets', [
    'clean:dev',
    'jst:dev',
    'less:dev',
    'copy:devLibJs',
    'copy:devLibCss',
    'copy:devLibFont',
    'copy:dev',
    'coffee:dev'
  ]);
};
