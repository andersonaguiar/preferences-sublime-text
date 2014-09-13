'use strict';
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        exec: {
            copy: 'cp  -rf ~/Dropbox/ST3/User/Package\\ Control.sublime-settings .'
        },

        bump: {
            options: {
                // files: ['Package Control.sublime-settings'],
                commit: true,
                commitMessage: 'Update list of plugins',
                commitFiles: ['-a'],
                push: true,
                createTag: false,
                pushTo: 'origin'
            }
        }
    });

    grunt.registerTask('build', ['exec:copy', 'bump']);
};
