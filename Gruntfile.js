module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      options: {
        frameworks: ['jasmine'],
        files: [
          'src/**/*.js',
          'test/**/*.js'
        ]
      },
      continuous: {
        singleRun: true,
        browsers: ['PhantomJS'],
        reporters: 'junit',
        junitReporter: {
          outputFile: 'test/reports/karma-results.xml'
        },
        client: {
          useIframe: false //to avoid phantomjs detect failure
        }
      },
      dev: {
        reporters: 'dots',
        browsers: ['Chrome']
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
}
