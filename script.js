function clickpage1() {
    document.getElementById("page1").style.display = "block";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("loader").style.display = "none";
}

function clickpage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";

}




function clickpage3() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
    document.getElementById("page4").style.display = "none";
}

function clickpage4() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
}



$(document).ready(function(){
	$("#page1").click(function(){
    $("#loader").fadeOut(5000);
    $("#page3").fadeIn(15000);
    });

    $("#page3").click(function(){
        $("#page3").fadeOut(5000);
        $("#page4").fadeIn(12000);

    


    });




});



