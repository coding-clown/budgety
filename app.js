//BUDGET CONTROLLER
var budgetController= (function(){

})();




//UI CONTROLLER
var UIController= (function(){
   var  DomStrings={
      inputType:".add__type",
      inputDes:".add__description",
      inputNum:".add__value"
    }

   return {
        getInput:function(){
          return{
            type:document.querySelector(DomStrings.inputType).value,
            description:document.querySelector(DomStrings.inputDes).value,
            number:document.querySelector(DomStrings.inputNum).value
          };
       
        },
        getDomStrings:function(){
          return DomStrings;
        }
    };

})();



//GLOBAL APP CONTROLLER
var controller=(function(budgetctrl,UIctrl){
    var setUpEventListeners=function(){
      document.querySelector('.add__btn').addEventListener('click',ctrlAdditem);

    document.addEventListener('keypress',function(e){
      if(e.keyCode==13||e.which==13){
        ctrlAdditem();
      }
    });
    }


    var Dom=UIctrl.getDomStrings;
    var ctrlAdditem= function(){
      var input=UIctrl.getInput;

      console.log(input());

    }
   return {
     init: function()
     {
       setUpEventListeners();
     }
   }
    

})(budgetController,UIController);
controller.init();