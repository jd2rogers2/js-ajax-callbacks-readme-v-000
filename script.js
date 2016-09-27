$(document).ready(function(){
  $.get("this_doesnt_exist.html", function(data){
    doSomethingGood();
  }).fail(function(error){
    console.log('something went wrong: ' + error);
  })

  // $.get("sentence.html", function(response){
  //   $('#sentences').html(response);
  // });
});