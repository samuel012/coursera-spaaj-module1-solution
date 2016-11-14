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
    $scope.messageStyle = {};
    $scope.textboxStyle = {};

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

      // -----------------------
      // changes to apply

      var changesToApply = getChangesToApply(dishesCount);

      $scope.message = changesToApply.statusMessage;
      $scope.messageStyle = {"color":changesToApply.textColor};
      $scope.textboxStyle = {"border-color":changesToApply.borderColor};

    };

    function getChangesToApply(dishesCount) {
      var retobject = new retValObj("green", "green", "-");

      if (dishesCount == 0) {
        retobject.borderColor = "red";
        retobject.textColor = "red";
        retobject.statusMessage = "Please enter data first";
      } else if (dishesCount <= 3) {
        retobject.statusMessage = "Enjoy!";
      } else {
        retobject.statusMessage = "Too much!";
      }

      return retobject;
    };

    function retValObj(borderColor, textColor, statusMessage) {
      this.borderColor = borderColor;
      this.textColor = textColor;
      this.statusMessage = statusMessage;
    };
  }

})();