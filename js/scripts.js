$(document).ready(function(){
  $("#form-submit").submit(function(event){
    event.preventDefault();

    var target = parseInt($("#target").val());
    var increment = parseInt($("#increment").val());

    $(".output").empty();
    // console.log(increment);
    if (increment < 0 || target < 0) {
      $(".output").append("Use positive numbers, bro.");
    } else if (increment > target) {
      $(".output").append("Your multiple is larger than your target!");
    } else if (isNaN(target)|| isNaN(increment)) {
      $(".output").append("Please use numbers!");
    } else {for (var index = 0; index < (target + 1); index += increment) {
      $(".output").append(index + " ");
    }}


  });
});
