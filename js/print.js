$(document).ready(function(){
    $("button").click(function(){
        window.print()
    });

    var qrcode = new QRCode("qrcode");
    var qrcode2 = new QRCode("qrcode2");

    function makeCode () {		
        
        qrcode.makeCode("Juan Dela Cruz\nFors Testing");
        qrcode2.makeCode("Juan Dela Cruz\nFors Testing");
    }

    makeCode();

    $("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });

    var today = new Date(Date.now())
    renderCountdown(today,new Date("Tue Apr 18 2023 09:27:07 GMT+0800"))

    function renderCountdown(dateStart, dateEnd){

        console.log(dateStart, dateEnd); 
        // Logs 
        // Sat Dec 19 2015 11:42:04 GMT-0600 (CST) 
        // Mon Jan 18 2016 11:42:04 GMT-0600 (CST)
    
        let currentDate = dateStart.getTime();
        let targetDate = dateEnd.getTime(); // set the countdown date
        let days, hours, minutes, seconds; // variables for time units
        let countdown = document.getElementById("tiles"); // get tag element
        let count = 0;
        var getCountdown = function (c){
            // find the amount of "seconds" between now and target
            let secondsLeft = ((targetDate - currentDate) / 1000) - c;
            days = pad( Math.floor( secondsLeft / 86400 ) );
            secondsLeft %= 86400;
            hours = pad( Math.floor( secondsLeft / 3600 ) );
            secondsLeft %= 3600;
            minutes = Math.floor( secondsLeft / 60 ) 
            if(minutes < 0){
                $("body").html(`
                <div class="printcard">
                    The link we provide is already expired please request for re-printing id.
                </div>`)
            }
            minutes = pad(minutes );
            seconds = pad( Math.floor( secondsLeft % 60 ) );
            // format countdown string + set tag value
            $("#timer h1").html(minutes+":"+seconds)
        }
        function pad(n) {
            return (n < 10 ? '0' : '') + n;
        }   
        getCountdown();
        setInterval(function () { getCountdown(count++ ); }, 1000);
    }
});