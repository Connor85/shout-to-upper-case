$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var messageInput = $("input#message").val();


    $(".response").text(messageInput.toUpperCase() + "!!!!!!!!");


    $("#shout").show();

    event.preventDefault();
  });
});
