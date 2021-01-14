$(document).ready(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault()
    const buttonValue = $("input:radio[name=exampleRadios]:checked").val();
    console.log(buttonValue)
    if (buttonValue === "option1") {
      $("#bearImg").hide()
      $("#tigerImg").hide()
      $("#lionImg").show()
    } else if (buttonValue === "option2") {
      $("#bearImg").hide()
      $("#lionImg").hide()
      $("#tigerImg").show()
    } else if (buttonValue === "option3") {
      $("#tigerImg").hide()
      $("#lionImg").hide()
      $("#bearImg").show()
    }
  })
});