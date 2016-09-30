$(document).ready(function () {
    $(document).on("click", "#add", function () {
            createRow();
    });
});

function createRow() {
$("#budgetbody").append('<tr> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px;"><input type="text" class="summary" placeholder="Enter bill summary""></input></td> <td style="border: 2px dotted black; padding-top: 10px; padding-bottom: 10px; padding-right: 30px; padding-left: 30px; "><input onkeypress="return isNumberKey(event) " type="text" name="amount" class="amount" placeholder="Enter bill amount "></input></td> </tr>');

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
    //iterate through each textboxes and add the values
    $(".amount").each(function () {

        //add only if the value is number
        if (!isNaN(this.value) && this.value.length> 0) {
            sum += parseFloat(this.value);
        }

    });
    //.toFixed() method will roundoff the final sum to 2 decimal places
    $("#total").val(sum.toFixed(2));
}


       /* function addMath(){
    var arr = document.getElementsByName('amount');
    var tot=0;
    for(var i=0;i<(arr.length);i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot; 
} */

$(function () {
    $("#add").on("click")
});