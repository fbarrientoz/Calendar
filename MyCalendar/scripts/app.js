var visible= false;
var important = false;
var UI = {};


function showDetalis(){
    console.log("btn Clicked!");
if(!visible)
{
    UI.secForm.removeClass('invisible');
    UI.btnShow.text('Hide Detalis');
    visible = true;
}
else{
    UI.secForm.addClass('invisible');
    UI.btnShow.text('Show Detalis');
    visible = false;
}
}

function toggleImportant(){

if(!important){
    UI.btnImportant.removeClass("btn-light");
    UI.btnImportant.addClass("btn-danger");
    important = true;
}
else{
    UI.btnImportant.addClass("btn-light");
    UI.btnImportant.removeClass("btn-danger");
    important = false;
}
}

function init()
{

    console.log("main page");
    UI= {
        btnShow: $("#btnShow"),
        btnImportant :  $("#btnImportant"),
        secForm :  $("#secForm")
    }


UI.btnShow.click(showDetalis);
UI.btnImportant.click(toggleImportant);
// $("#btnShow").click(showDetalis);
// $("#btnImportant").click(toggleImportant);
//set the text of an input field

    
    
}
window.onlaod = init();