# cordova-plugin-opentokjs-example
This is an example application which shows the use of the `cordova-plugin-opentokjs` plugin for
Cordova with the use of the standard Ionic tabs starter project.

## Setup

You will need an OpenTok API Key, Session ID, and Token. If you do not already have these, you can
get these values from the [TokBox Dashboard](https://dashboard.tokbox.com).

1. Clone the repository.

2. Download NPM dependencies `npm install`.

3. Download Bower dependencies `bower install`.

4. Rename the `www/js/app.constant.js.sample` file to `www/js/app.constant.js`.

5. Insert your own values for your OpenTok API Key, Session ID, and a Token into `www/js/app.constant.js`.

**NOTE:** Running `ionic serve` does not include the necessary `opentok.js` from the plugin. Therefore this command doesn't work to test the application. Use `ionic build browser` and `gulp browser:serve` instead.

## Running the application on a specific platform

Before you are able to build for a specific platform, you need to add this platform to your project:

* `ionic platform add android`

* `ionic platform add ios` -> **Note**: Adding platform IOS can only be performed on a Mac OSX

* `ionic platform add browser` -> **Note**: Still in BETA

After adding the correct platform(s), you can run the application using the Ionic CLI. Examples:

*  `ionic emulate android` -> Runs project within Android emulator. Only recommended for AVDs
   created with x86 emulation (Intel HAXM). Also, be aware that most AVDs are setup with virtualized
   camera's and microphones by default. This can be configured when creating a new AVD.

*  `ionic run android --device` -> Runs project on an Android device.

*  `ionic build browser` -> Builds project for a browser and loads all cordova plugins. To be able to serve the browser build, run `gulp browser:serve`. Note that the `gulp browser:serve` has live-reload. When you change anything on the project just re-run `ionic build browser` and you are good to go.

*  `ionic run ios --device` -> Runs project on an iOS device. Make sure you have `ios-deploy`
   installed.

*  `ionic run ios --simulator` -> Runs project on the iOS Simulator. Make sure you have `ios-sim`
   installed. Also, be aware that the iOS Simulator does not have access to your machine's camera
   or microphone.

## Known Issues

Please note the following known issues:

* [cordova-plugin-iosrtc](https://github.com/eface2face/cordova-plugin-iosrtc#known-issues)

* [cordova-plugin-opentokjs](https://github.com/aoberoi/cordova-plugin-opentokjs#known-limitations)

## Author

* [Mark Veenstra](https://github.com/mark-veenstra) at [Mobilea BV](http://www.mobilea.nl)

## Special thanks

* [Ankur Oberoi](https://github.com/aoberoi) at [TokBox Inc](https://tokbox.com/)

* [Adam Ullman](https://github.com/aullman) at [TokBox Inc](https://tokbox.com/)

## License

[MIT](./LICENSE) :)
