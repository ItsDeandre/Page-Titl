// We need to create a pagecounter variable before the function and set it to zero
let pageCounter = 0;
// When User Clicks on Submit Button
$(".submit").click(function() {
    // Save their input age and fav team type as variables
    let hero;
    hero = $(".hero").val();
    let age = $(".age").val();
    
    // Increase the page count counter by 1
    pageCounter = pageCounter + 1;
    // Then update the pagecounter value on the page
    $(".num").text(pageCounter);
    
    // Append what the user submitted to the page
    let textOutput;
    textOutput = "<p>" + "You are" + age + "years old and like to play" + hero + "</p>";
    $(".user-output").append(textOutput);
});
