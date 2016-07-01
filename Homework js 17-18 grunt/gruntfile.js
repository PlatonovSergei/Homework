module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
       options: {
         separator: ';'
       },
       dist: {
         src: ['js/src/*.js'],
         dest: 'js/dist/script.min.js'
       }
    },

    uglify: {
     dist: {
      src: ['js/dist/script.min.js'],
      dest: 'js/dist/script.min.js'
     }

   },

    concat_css: {
        options: {
        },
        css: {
          src: ['css/src/*.css'],
          dest: 'css/dist/style.min.css'
        }
      },

    cssmin: {
          css: {
          src: ['css/dist/style.min.css'],
          dest: 'css/dist/style.min.css'
        }
      },

    watch: {
      scripts: {
         files: ['js/src/*.js'],
         tasks: ['concat', 'uglify']
       },
       css: {
         files: ['css/src/*.css'],
         tasks: ['concat_css', 'cssmin']
        }
     }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin', 'watch']);

};
