/**
 * Created by konstantin on 22.01.16.
 */

/**
 * Created by Constantine Podlesny on 22.01.16.
 */

(function(){
    function MainCtrl ($scope, $http, URL){
        this.$scope = $scope;
        this.$http = $http;
        this.URL = URL;
        $scope.user = {};

    }

    MainCtrl.prototype.getUser = function($scope){
        this.$http.get(this.URL + 'user')
            .success(function(res){
            $scope.user = res

            })
    };

    angular.module('App')
        .controller('MainCtrl', MainCtrl)
}());