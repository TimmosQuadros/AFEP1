/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('routes', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/newperson", {
            templateUrl: "/newperson.html",
            controller: "PersonController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

