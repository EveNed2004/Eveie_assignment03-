
console.log("hello world");
var glassescount = 0;
 // // $("#glasses").on("click", function(){


// // // })

$("#baby-c, #chp-2, #story-1, #chp-3 #story-2, #divorce-b,  #divorce-c, #moving-b, #moving-c, #hospital-b, #hospital-c, #covid-b, #covid-c, #uni-b, #uni-c  ").hide()
$("#baby-b").css("background-image", 'url("images/babyB.PNG")')
$("#baby-c").css("background-image", 'url("images/BabyC.PNG")')
$("#baby-c").hide();

$("#chp-6").hide();
$("#chp-5").hide();
$("#chp-4").hide();
$("#chp-3").hide();
$("#chp-2").hide();
$("#chp-1").show();

$("#story-1").hide();
$("#story-2").hide();
$("#story-3").hide();
$("#story-4").hide();
$("#story-5").hide();
$("#story-6").hide();

$("#baby-g").on("click", function(){$("#chp-1").show();
    console.log("clicked on glasses")
    
    
    glassescount++;
    console.log(glassescount)
    if (glassescount == 1){
    $("#baby-b").fadeOut();
    $("#baby-c").show();
    $("#chp-1").fadeOut();
    $("#story-1").show();
    $("#chp-2").hide();

    $(" #chp-2, #chp-3, #chp-4, #chp-5, #chp-6, #chp-1, #story-2, #story-3, #story-4, #story-5, #story-6, #divorce-c, #moving-b, #moving-c, #hospital-b, #hospital-c, #covid-b, #covid-c, #uni-b, #uni-c").hide();
    } else if (glassescount == 2 ) {
        $(".glasses").css("background-image", 'url("images/divorceG.PNG")')
        console.log("divorce")
        $("#baby-c").fadeOut();
        $("#divorce-b").show();
        $("#story-1").fadeOut();
        $("#chp-2").show();
        $("#chp-1").hide();

    } else if (glassescount == 3) {
        $("#divorce-b").fadeOut();
        $("#divorce-c").show();

        $("#chp-2").fadeOut();
        $("#chp-1").hide();
        $("#story-2").show();

    } else if (glassescount == 4) {
        $("#moving-b").show();
        $("#divorce-c").fadeOut();
        $("#chp-3").show();
        $("#chp-1").hide();
        $("#story-2").fadeOut();

        $(".glasses").css("background-image", 'url("images/movingG.PNG")')

    } else if (glassescount == 5) {
        $("#moving-b").fadeOut();
        $("#moving-c").show();
        $("#story-3").show();
        $("#chp-3").fadeOut();
        $("#chp-1").hide();

    } else if (glassescount == 6) {
        $("#moving-c").fadeOut();
        $("#hospital-b").show();
        $("#chp-1").hide();
        $("#story-3").fadeOut();
        $("#chp-4").show();

        $(".glasses").css("background-image", 'url("images/hospitalG.PNG")');

    } else if (glassescount == 7 ) {
        $("#hospital-b").fadeOut();
        $("#hospital-c").show();
        $("#chp-1").hide();
        $("#chp-4").fadeOut();
        $("#story-4").show();

    } else if (glassescount == 8 ) {
        $("#hospital-c").fadeOut();
        $("#covid-b").show();
        $("#chp-1").hide();
        $("#chp-5").show();
        $("#story-4").fadeOut();

        $(".glasses").css("background-image", 'url("images/covidG.PNG")');
    } else if (glassescount == 9) {
        $("#covid-b").fadeOut();
        $("#covid-c").show();
        $("#chp-5").fadeOut();
        $("#story-5").show();
        $("#chp-1").hide();

    } else if (glassescount == 10) {
        $(".glasses").css("background-image", 'url("images/uniG.PNG")');
        $("#chp-1").hide();
        $("#chp-6").show();
        $("#story-5").fadeOut();
        $("#covid-c").fadeOut();
        $("#uni-b").show();
        
        
    
    } else if (glassescount == 11) {
        $("#story-6").show();
        $("#chp-6").fadeOut();
        $("#uni-b").hide();
        $("#uni-c").show();
        $("#chp-1").hide();
    }
})


//$("#baby-g").css("background-image", 'url("images/babyG.PNG")')



$("#divorce-b").css("background-image", 'url("../images/divorceB.PNG")')
$("#divorce-c").css("background-image", 'url("../images/divorceC.PNG")')

$("#moving-b").css("background-image", 'url("../images/movingB.PNG")')
$("#moving-c").css("background-image", 'url("../images/movingC.PNG")')


$("#hospital-b").css("background-image", 'url("../images/hospitalB.PNG")')
$("#hospital-c").css("background-image", 'url("../images/hospitalC.PNG")')

$("#covid-b").css("background-image", 'url("../images/covidB.PNG")')
$("#covid-c").css("background-image", 'url("../images/covidC.PNG")')

$("#uni-b").css("background-image", 'url("../images/universityB.PNG")')
$("#uni-c").css("background-image", 'url("../images/universityC.PNG")')




