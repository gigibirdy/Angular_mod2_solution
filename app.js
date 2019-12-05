(function(){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyItems = this;
    toBuyItems.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyItems.buyItems = function(index){
      ShoppingListCheckOffService.buyItems(index);
    }
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtItems = this;
    boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "oranges", quantity: 10 },
      { name: "apples", quantity: 20 },
      { name: "cupcakes", quantity: 10 },
      { name: "ice cream", quantity: 100 }
    ];
    var bought = [];
    service.buyItems = function(index){
      var selected = toBuy.splice(index, 1);
      bought.push(selected[0]);
    }
    service.getToBuyItems = function(){
      return toBuy;
    }
    service.getBoughtItems = function(){
      return bought;
    }
  }
})();
