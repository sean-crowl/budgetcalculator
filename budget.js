$(document).ready(function () {
    $(document).on("click", "#add", function () {
            createRow();
    });
});

function createRow() {
$("#budgetbody").append('<tr> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px;"><input type="text" class="summary" placeholder="Enter bill summary""></input></td> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px; ">$<input onkeypress="return isNumberKey(event) " type="text" name="amount" class="amount" placeholder="Enter bill amount "></input></td> </tr>');

}

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }
       
function addMath() {
    $(".amount").each(function () {
            calculateSum();
            $("#total").show();
           });

}

function calculateSum() {
    var sum = 0;
    $(".amount").each(function () {

        if (!isNaN(this.value) && this.value.length> 0) {
            sum += parseFloat(this.value);
        }

    });
    $("#total").val(sum.toFixed(2));
}

function clearVal() {
    $(".summary").val("");
    $(".amount").val("");
    $("#total").val("");
}

$(function () {
    $("#add").on("click")
    $("#clear").on("click")
});