var numText = ['Null', 'Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn'];
//var numText = ['Null', 'Eins', 'Zwei', 'Drei'];
var numbers = [];
var numCorrect = 0;
var secLeft = 45;
var clock =null;
var correct=0;
var wrong=0;
var final=0;

function Numbers(numbersCookie, numCorrectCookie) {
    console.log(numbersCookie);
    if (numCorrectCookie == null) {
        numCorrect = 0;
    } else {
        numCorrect = numCorrectCookie;
    }
    
    if (numbersCookie == null) {
        for (var i = 0; i < numText.length; i++) {
            var number = new Number(numText[i], i, 0, false);
            
            numbers.push(number);
        }
    } else {
        numbers = numbersCookie;
    }
    this.initGame = initGame();
    console.log(numbers);
}
;

function Number(word, digit, errorNum, placed) {
    this.digit = digit;
    this.word = word;
    this.placed = placed;
    this.errorNum = errorNum;
}

function initGame() {
    console.log("initializing");
    var ulText = $('#numName');
    var ulNum = $('#numNumeric');
    for (var i = 0; i < numbers.length; i++) {
        ulText.append('<li id="t' + numbers[i].digit + '">' + numbers[i].word + '</li>');
        ulNum.append('<li id="n' + numbers[i].digit + '">' + numbers[i].digit + '</li>');
        if (numbers[i].placed) {
            $("#n" + i).hide();
        }
    }
    addDragNDrop();
    startInterval();
}

function countdown(){
    secLeft--;
     $("#timer").val(secLeft);
    
}

function startInterval(){
    clock =setInterval("countdown()",1000);
}

function stopInterval(){
    clearInterval(clock);
}

function addDragNDrop() {
    for (var i = 0; i < this.numbers.length; i++) {
        $("#n" + i).data("index", {index: i});
        $("#t" + i).data("index", {index: i});
        $('#n' + i).draggable();
        $("#t" + i).droppable({drop: function (event, ui) {
                checkPlacement(event, ui, this.id);
            }});
    }
}

function checkPlacement(event, ui, ti) {
    var ni = ui.draggable.attr("id");

    var niElem = $('#' + ni);
    var tiElem = $('#' + ti);
    if (niElem.data("index").index === tiElem.data("index").index) {
        
        niElem.draggable("disable");
        niElem.css("display", "none");
        numbers[niElem.data("index").index].placed = true;
        numCorrect++;
        checkPlacementStatus();

    } else {
        var dimx = $('body').width();
        var dimy = $('body').height();
        var left = Math.floor((Math.random() * (dimx - 20)) + 10);
        var top = Math.floor((Math.random() * (dimy - 20)) + 10);
        niElem.css("left", left + "px");
        niElem.css("top", top + "px");
        numbers[niElem.data("index").index].errorNum++;
        wrong--;
    }
    setCookies();
}

function setCookies() {
    Cookies.set('numbers', numbers, {expires: 128});
    Cookies.set('numCorrect', numCorrect, {expires: 128});
}

function checkPlacementStatus() {
    if (numCorrect === numbers.length) {
        console.log("initializing sorting");
        initSorting();
    }
}

function initSorting() {
    $('ul').randomize();
    $('#numName').sortable({
        start: function (event, ui) {
        },
        update: function (event, ui) {
            var ordered = 0;
            for (var j = 0; j < numText.length; j++) {
                if ($('#t' + j).index() == j)
                    ordered++;
            }
            if (ordered == numText.length){
//                alert("done");
                            stopInterval();
            final = (parseInt(correct+1)*5)+(parseInt(wrong)*1)+parseInt(secLeft);
            $("#score").html("Your final score is "+parseInt(final));
            }
//        if(numCorrect === 11){
//
//        }
        checkPlacementStatus();
        correct++;
        }
    });
}
