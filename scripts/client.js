var myApp = angular.module('myApp', []);

myApp.controller('WelcomeController', function() {
    console.log('WelcomeController is running');
    var self = this;
    self.message = 'Hello World';  
    
    self.newThing = {

    };

    self.favoriteThings = [
        {
            name: 'Chocolate',
            happinessPoints: 350
        },
        {
            name: 'Little plastic army men',
            happinessPoints: 10
        },
        {
            name: 'AngularJS',
            happinessPoints: 349
        }
    ]

    self.greet = function() {
        console.log('Hello Angular');        
    }

    self.addNewThing = function() {
        self.favoriteThings.push(self.newThing)
        self.newThing = {}
    }
});