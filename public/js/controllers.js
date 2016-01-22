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
        this.getUser();

    }

    MainCtrl.prototype.getUser = function(){
        var $scope = this.$scope
        this.$http.get(this.URL + 'user')
            .success(function(res){
                debugger
            $scope.user = res

        })
    }

    angular.module('App')
        .controller('MainCtrl', MainCtrl)
}());