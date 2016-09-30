$(document).ready(function () {
    $(document).on("click", "#add", function () {
            createRow();
    });
});

function createRow() {
$("#budgetbody").append('<tr> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px;"><input type="text" class="summary" placeholder="Enter bill summary""></input></td> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px;"><input onkeypress="return isNumberKey(event)" type="text" class="amount" placeholder="Enter bill amount"></input></td> </tr>');

}

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

       

$(function () {
    $("#add").on("click")
});