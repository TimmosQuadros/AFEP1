/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app = angular.module('personApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/newperson", {
                templateUrl: "view/newperson.html",
                controller: "appPersonsController"
            })
            .otherwise({
                redirectTo: "/"
            });
});



app.controller('appPersonsController', function () {
    
    var self = this;
    self.persons = [
        {id: 1, name: "Jens", age: 18},
        {id: 2, name: "Peter", age: 23},
        {id: 3, name: "Hanne", age: 23}
    ];
    
    self.viewPerson = {id: "", name: "", age: ""};
    
    self.getPerson = function(id){
        self.viewPerson = self.persons[id - 1];
    };
    
    self.setShowDetails = function(setShowDetails){
        this.hideDetails=setShowDetails;
    };
    
    self.name = "";
    self.age = "";
    self.hideDetails = true;
    
    self.addPerson = function () {
        self.id = self.getNextId();
        self.persons.push({id: self.id, name: self.name, age: self.age});
    };
    
    //Helper function
    self.getNextId = function () {
        return self.persons.length + 1;
    };
    
});

