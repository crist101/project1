$(document).ready(function(){
    $("#homeButton").click(function(){
        var toggle = $(this).attr("toggle");
        if(toggle=="True"){
            $("header nav").addClass("open");
            $(this).attr("toggle","False");
        }else{
            $("header nav").removeClass("open");
            $(this).attr("toggle","True");
        }
    });
    $("main .table table tbody tr").on("dblclick","td",function(){
        $(this).attr("contenteditable","true")
        console.log($(this).html());
    });
    $("main .table table tbody tr").on("focusout","td",function(){
       // $(this).attr("contenteditable","false")
        //console.log("FocusOut");
    });
    var date = new Date(2023, 3,0)
    var date2 = new Date(2023, 3,1)
    previewCalendar(date.getDate());

    function previewCalendar(val){
        var table = "";
        var count = 0;
        if(date2.getUTCDay() != 6){
            for(y = 0;y < date2.getUTCDay()+1;y++){
                table += count === 0? `<tr>\n`:''
                
                table += `
                <td>
                </td>`
                count++
            }
        }

        for(x = 1;x <= val;x++){
            table += count === 0? `<tr>\n`:''
            
            table += `
            <td>
                <h1>
                ${x}
                </h1>
                <p>
                ${(Math.floor(Math.random() * 500))} Activities</p>
                <button>View Record</button>
            </td>`
            table += count === 7? `<tr>\n`:''
            count++
            count = count === 7? 0 : count
        }
        $("#calendayList").html(table)
    }
    
});
(function(document) {
    'use strict';
    var TableFilter = (function(myArray) {
        var search_input;

        function _onInputSearch(e) {
            search_input = e.target;
            var tables = $("table");
            console.log(tables)
            myArray.forEach.call(tables, function(table) {
                myArray.forEach.call(table.tBodies, function(tbody) {
                    myArray.forEach.call(tbody.rows, function(row) {
                        var text_content = row.textContent.toLowerCase();
                        var search_val = search_input.value.toLowerCase();
                        row.style.display = text_content.indexOf(search_val) > -1 ? '' : 'none';
                    });
                });
            });
        }

        return {
            init: function() {
                var inputs = $("#search");
                myArray.forEach.call(inputs, function(input) {
                    input.oninput = _onInputSearch;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            TableFilter.init();
        }
    });

})(document);