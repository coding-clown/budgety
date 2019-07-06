//BUDGET CONTROLLER
var budgetController= (function(){

})();




//UI CONTROLLER
var UIController= (function(){
   return {
        getInput:function(){
          return{
            type:document.querySelector(".add__type").value,
            description:document.querySelector(".add__description").value,
            number:document.querySelector(".add__value").value
          };
       
        }
    };

})();



//GLOBAL APP CONTROLLER
var controller=(function(budgetctrl,UIctrl){

    var ctrlAdditem= function(){
      var input=UIctrl.getInput;
      console.log(input());

    }
    document.querySelector('.add__btn').addEventListener('click',ctrlAdditem);

    document.addEventListener('keypress',function(e){
      if(e.keyCode==13||e.which==13){
        ctrlAdditem();
      }
    });

})(budgetController,UIController);
