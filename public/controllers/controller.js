var myApp = angular.module('myApp', ["ui.bootstrap"]);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("AppCtrl controller initialised");

    $scope.results = [];

    /* search(location)
     *
     * This function will
     */
    $scope.search = function(location) {
        console.log("Search term is: " + location);

        $http.get('/location/' + location).success(function(response) {
            console.log(response);
            $scope.results = response;

        });
    }


}]);
