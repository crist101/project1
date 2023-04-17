$(document).ready(function(){
    $(".form-box span, .search-box span").click(function(){
       $(`#${$(this).attr("for")}`).focus();
       $(this).addClass("span-active");
    });
    $("input,select").focus(function(){
        $(`span[for=${$(this).attr("id")}]`).addClass("span-active");
    });
    $("input,select").focusout(function(){
        if($(this).val() == ""){
            $(`span[for=${$(this).attr("id")}]`).removeClass("span-active");
        }
    });
});