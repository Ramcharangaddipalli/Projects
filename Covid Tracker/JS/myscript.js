const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);
app.controller('MyCtrl', ($scope, $http)=>{
    //this is controller
    $scope.msg = "Stay Home Stay Safe";
    console.log("App Loaded");

    //calling Api
    $http.get(URL).then(
        (response)=>{
        //sucess
        console.log("inside sucess");
        console.log(response.data);
        $scope.covid_data = response.data;
    },
    (error)=>{
        //error
        console.log(error);
    }
    );

    //get country data
    $scope.get_c_data = ()=>{
        console.log("Get Country Data...LOG")
        console.log($scope.c)
        let country = $scope.c;
        if(country == ""){
            $scope.c_data=undefined;
            return;
        };
        $http.get(`${URL}/countries/${country}`).then(
            (response)=>{
            console.log(response.data)
            $scope.c_data = response.data;

        },
        (error)=>{
            console.log(error)
        });
    };

});