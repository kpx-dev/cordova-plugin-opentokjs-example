angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Todo) {
    $scope.todos = Todo.all();
})

.controller('VideocallCtrl', function($scope, TokBoxSettings) {
    var opentok = {
        config: undefined,
        session: undefined,
        publisher: undefined,
        subscriber: undefined,
        isSubscribing: false,

        initializePublisher: function() {
            opentok.publisher = OT.initPublisher('publisher');
        },

        initializeSession: function() {
            opentok.session = OT.initSession(TokBoxSettings.apiKey, TokBoxSettings.sessionId);
            opentok.session.on('streamCreated', opentok.onStreamCreated);
            opentok.session.on('streamDestroyed', opentok.onStreamDestroyed);
            opentok.session.connect(TokBoxSettings.token, opentok.onSessionConnected);
        },

        onSessionConnected: function(event) {
            console.log('onSessionConnected: ', event);
            opentok.session.publish(opentok.publisher);
        },

        onStreamCreated: function(event) {
            if (!opentok.isSubscribing) {
                console.log('onStreamCreated: ', event);
                opentok.subscriber = opentok.session.subscribe(event.stream, 'subscriber');
                opentok.isSubscribing = true;
            }
        },

        onStreamDestroyed: function(event) {
            if (opentok.isSubscribing && event.stream.streamId === opentok.subscriber.stream.streamId) {
                console.log('onStreamDestroyed: ', event);
                opentok.session.unsubscribe(opentok.subscriber);
                opentok.isSubscribing = false;
                opentok.subscriber = undefined;
            }
        }
    };

    OT.setLogLevel(OT.DEBUG);
    opentok.initializePublisher();
    opentok.initializeSession();
})

.controller('AboutCtrl', function($scope) {
    $scope.now = new Date().getTime();
});
