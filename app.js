(function () {
  'use strict';

  /**
  * LunchCheck Module
  *
  * Checks for the number of dishes entered (comma separated), then identifies whether it's just enough or too much.
  */
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.dishes = "";

    $scope.checkIfTooMuch = function () {
      var dishesCount = 0;
      var dishesArray = $scope.dishes.split(',');
      
      console.log('DISH ARRAY: ' + dishesArray);
      console.log('NATIVE DISH ARRAY COUNT: ' + dishesArray.length);

      if (dishesArray.length > 0) {
        for (var i = 0; i < dishesArray.length; i++) {
          if (dishesArray[i] !== "") {
            dishesCount++;
          }
        }
      }

      console.log('DISH COUNT W/O BLANKS: ' + dishesCount);

      $scope.message = getReturnMessage(dishesCount);
      
    };

    function getReturnMessage(dishesCount) {
      var returnMessage = "";

      if (dishesCount == 0) {
        returnMessage = "Please enter data first";
      } else if (dishesCount <= 3) {
        returnMessage = "Enjoy!";
      } else {
        returnMessage = "Too much!";
      }

      return returnMessage;
    };
  }

})();