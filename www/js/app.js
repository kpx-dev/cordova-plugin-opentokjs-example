// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngIOS9UIWebViewPatch'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }

            // Just for iOS devices.
            if(device.cordova) {
                if (device.platform === 'iOS') {
                    cordova.plugins.iosrtc.debug.enable('iosrtc*');
                    cordova.plugins.iosrtc.registerGlobals();
                    window.OT = cordova.require('cordova-plugin-opentokjs.OpenTokClient');
                    alert('We registered cordova-plugin-iosrtc globals!');
                }
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })

            // Each tab has its own nav history stack:

            .state('tab.dash', {
                url: '/dash',
                views: {
                    'tab-dash': {
                        templateUrl: 'templates/tab-dash.html',
                        controller: 'DashCtrl'
                    }
                }
            })

            .state('tab.videocall', {
                url: '/videocall',
                views: {
                    'tab-videocall': {
                        templateUrl: 'templates/tab-videocall.html',
                        controller: 'VideocallCtrl'
                    }
                }
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'tab-about': {
                        templateUrl: 'templates/tab-about.html',
                        controller: 'AboutCtrl'
                    }
                }
            });

        /*
         We are using the below urlRouterProvider.otherwise() because of:
         https://github.com/angular-ui/ui-router/issues/600
         */
        $urlRouterProvider.otherwise(function($injector, $location) {
            var $state = $injector.get('$state');
            $state.go('tab.dash');
        });

    });
