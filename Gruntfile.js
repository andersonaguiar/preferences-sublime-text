'use strict';
module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        exec: {
            copyControl: 'cp  -rf ~/Dropbox/ST3/User/Package\\ Control.sublime-settings .',
            copyPreferences: 'cp  -rf ~/Dropbox/ST3/User/Preferences.sublime-settings .'
        },

        bump: {
            options: {
                // files: ['Package Control.sublime-settings'],
                commit: true,
                commitMessage: 'Update preferences',
                commitFiles: ['-a'],
                push: true,
                createTag: false,
                pushTo: 'origin'
            }
        }
    });

    grunt.registerTask('build', ['exec:copyControl', 'exec:copyPreferences', 'bump']);
};
