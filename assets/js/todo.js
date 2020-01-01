// Set listiner for delete button, using on(...),
$("ul").on("click",".deleteBtn", function (event) {
    $(this).parent().fadeOut(500, function (){
        $(this).remove();
    });
    event.stopPropagation();
});

$("ul").on("click", "li",function () {
    $(this).toggleClass("done");
});

$(".fa.fa-plus-circle").on("click", function (){
    console.log("clicked the toggle.");
    $("input[type='text']").fadeToggle();
    
});
$("input[type='text']").keypress(function (event){
    var userText = null;
    if (event.which === 13){
        userText = $(this).val();
        console.log(`<li><span class="deleteBtn"><i class="fa fa-minus-circle" aria-hidden="true"></span>${userText}</li>`);
        $("ul").append(`<li><span class="deleteBtn"><i class="fa fa-minus-circle" aria-hidden="true"></i></span>${userText}</li>`);
        $(this).val("");
    }
});