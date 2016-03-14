module.exports = function(grunt){
  grunt.initConfig({
	jshint: {
      all : ['Gruntfile.js']
    },
	
	//WEB SERVICE'S CONFIG
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'app',
          keepalive: true,
          open: {
            target: 'http://localhost:9000'
          }
        }
      }
    }
  });
  
  //LOAD PLUGINS GRUNT
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  //TASK FOR DEV AND TESTE
  grunt.registerTask('default', ['jshint', 'connect']);
};
