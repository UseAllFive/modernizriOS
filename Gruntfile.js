var config;
var matchdep = require('matchdep');
var module;

config = {
    files: {
        build: 'lib/modernizriOS.js',
        check: [
            'lib/modernizriOS.js',
            'Gruntfie.js'
        ],
        dest: 'dist/modernizriOS.min.js'
    }
};

module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');
    var defaultTasks;

    grunt.initConfig({
        pkg: pkg,

        clean: {
            dist: 'dist'
        },

        jshint: {
            options: {
                jshintrc: true
            },
            all: {
                files: {
                    src: config.files.check
                }
            }
        },

        jscs: {
            all: {
                files: {
                    src: config.files.check
                }
            }
        },

        uglify: {
            all: {
                src: config.files.build,
                dest: config.files.dest
            }
        },

        watch: {
            options: {
                interrupt: true
            },
            js: {
                files: config.files.check,
                tasks: ['clean', 'uglify']
            }
        }
    });

    // Load all npm dependencies.
    matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Register tasks.
    defaultTasks = [
        'clean',
        'jshint',
        'jscs',
        'uglify'
    ];
    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('dev', defaultTasks.concat('watch'));
};
