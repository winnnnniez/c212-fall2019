var shoppingList = angular.module('shoppingList', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/products')
        .success(function(data) {
            $scope.products = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.addItem = function() {
        $scope.errortext = "";
        
        for (var product of $scope.products) {
          if (product.text == $scope.formData.text) {
            $scope.errortext = "The item is already in your shopping list.";
                  return;
            }
        }
        
        $http.post('/api/products', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; 
                $scope.products = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    
    $scope.removeItem = function(id) {
        $scope.errortext = "";
        
        $http.delete('/api/products/' + id)
            .success(function(data) {
                $scope.formData = {};
                $scope.products = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

  }
