$(document).ready(function(){
  $("#form-submit").submit(function(event){
    event.preventDefault();

    var target = parseInt($("#target").val());
    var increment = parseInt($("#increment").val());

    $(".output").empty();
    console.log(increment);

    if (target === NaN || increment === NaN) {
      $(".output").append("Please use numbers!");
     }


    for (var index = 0; index < (target + 1); index += increment) {

      $(".output").append(index + " ");
    }


  });
});
