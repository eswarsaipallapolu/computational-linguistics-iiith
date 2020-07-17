var eng = [["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"],
["some students like to study in the night", "at night some students like to study"],
["John and Mary went to church", "Mary and John went to church"],
["John went to church after eating", "after eating John went to church", "John after eating went to church"],
["did he go to market", "he did go to market"],
["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"],
["John goes to the library and studies", "John studies and goes to the library"],
["John ate an apple so did she", "she ate an apple so did John"],
["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"],
["I told her that i bought a book yesterday", "I told her yesterday that i bought a book", "yesterday i told her that I bought a book", "I bought a book that i told her yesterday", "I bought a book yesterday that i told her", "yesterday I bought a book that i told her"]];

var hin = [["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"]];

function sentencefunc() {
    var x = document.getElementById('lang').value;
    document.getElementById('demo').innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
    document.getElementById('demo1').innerHTML = "(select the buttons in proper order)";
    if (x == "english") {
        document.getElementById("ans").innerHTML = " ";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        document.getElementById("demo6").innerHTML = "";
        document.getElementById("demo7").innerHTML = "";
        document.getElementById("demo10").innerHTML = "";
        document.getElementById("demo11").innerHTML = "";
        finishedsentence = " ";
        buttoncount = 0;
        wordcount = 0;
        number = 0;
        document.getElementById("demo8").innerHTML = "";
        document.getElementById("demo9").innerHTML = "";
        english();

    }
    else if (x == "hindi") {
        document.getElementById("ans").innerHTML = " ";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        document.getElementById("demo6").innerHTML = "";
        document.getElementById("demo7").innerHTML = "";
        document.getElementById("demo10").innerHTML = "";
        document.getElementById("demo11").innerHTML = "";
        finishedsentence = " ";
        buttoncount = 0;
        wordcount = 0;
        number = 0;
        document.getElementById("demo8").innerHTML = "";
        document.getElementById("demo9").innerHTML = "";
        hindi();
    }
    else {
        alert("select language");
        document.getElementById("ans").innerHTML = " ";
        document.getElementById("demo3").innerHTML = "";
        document.getElementById("demo4").innerHTML = "";
        document.getElementById("demo6").innerHTML = "";
        document.getElementById("demo7").innerHTML = "";
        document.getElementById("demo10").innerHTML = "";
        document.getElementById("demo11").innerHTML = "";
        document.getElementById("demo8").innerHTML = "";
        document.getElementById("demo9").innerHTML = "";

    }
}
var initialvalues = "";
function english() {
    number = parseInt(Math.random() * 10);
    var subnumber = eng[number][0];
    var arr = new Array();
    var sentence = subnumber.split(" ");
    while (arr.length < sentence.length) {
        var word = parseInt(Math.random() * sentence.length);
        b = arr.includes(sentence[word]);
        if (b != true) {
            arr.push(sentence[word]);
        }
    }
    var button = " ";
    var spbutton = "";
    // document.getElementById('demo9').innerHTML=arr.length;
    for (var i = 0; i < arr.length; i++) {
        button = "<button id='btn" + i + "' onclick='display(this.id,this.value)' value='" + arr[i] + "'>" + arr[i] + "</button>  ";
        spbutton = spbutton + button + "&nbsp&nbsp&nbsp;"
        buttoncount = buttoncount + 1;
    }
    //document.getElementById('demo3').innerHTML=spbutton;
    initialvalues = spbutton.trim();
    document.getElementById("ans").innerHTML = spbutton.trim();
    return true;

}
function hindi() {
    number = parseInt(Math.random() * 7);
    var subnumber = hin[number][0];
    var arr = new Array();
    var sentence = subnumber.split(" ");
    while (arr.length < sentence.length) {
        var word = parseInt(Math.random() * sentence.length);
        b = arr.includes(sentence[word]);
        if (b != true) {
            arr.push(sentence[word]);
        }
    }
    var button = " ";
    var spbutton = "";
    // document.getElementById('demo9').innerHTML=arr.length;
    for (var i = 0; i < arr.length; i++) {
        button = "<button id='btn" + i + "' onclick='display(this.id,this.value)' value='" + arr[i] + "'>" + arr[i] + "</button>  ";
        spbutton = spbutton + button + "&nbsp&nbsp&nbsp;"
        buttoncount = buttoncount + 1;
    }
    //document.getElementById('demo3').innerHTML=spbutton;
    initialvalues = spbutton.trim();
    document.getElementById("ans").innerHTML = spbutton.trim();
    return true;

}
var finishedsentence = "";
function display(id, value) {
    document.getElementById("demo3").innerHTML = "Formed Sentence (after selecting words):";
    finishedsentence += value + " ";
    document.getElementById("demo4").innerHTML = finishedsentence;
    document.getElementById(id).style.display = "none";
    document.getElementById("demo6").innerHTML = "<center><button id='reform' onclick='reset(initialvalues)'>Re-form the sentence</button></center>"
    wordcount++;
    if (wordcount == buttoncount) {
        document.getElementById("demo7").innerHTML = "<center><button id='check' onclick='check()'>Check the correctness of sentence</button></center>"
    }
    return true;
}
function reset() {
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo4").innerHTML = "";
    document.getElementById("demo6").innerHTML = "";
    document.getElementById("demo7").innerHTML = "";
    document.getElementById("demo8").innerHTML = "";
    document.getElementById("demo9").innerHTML = "";
    document.getElementById("demo10").innerHTML = "";
    document.getElementById("demo11").innerHTML = "";
    wordcount = 0;
    document.getElementById("ans").innerHTML = initialvalues;
    finishedsentence = "";
    return true;

}
function check() {
    var x = document.getElementById('lang').value;
    //document.getElementById('demo9').innerHTML="hello"+x+finishedsentence;
    if (x == "english") {
        finishedsentence = finishedsentence.trim();
        //var j=0;
        //var k=eng[j].length;
        for (var j = 0; j < eng.length; j++) {
            var k = eng[j].length;
            for (var m = 0; m < k; m++) {
                var str = eng[j][m];
                var n1 = str.localeCompare(finishedsentence);
                if (n1 == 0) {
                    document.getElementById('demo9').innerHTML = "right answer!!!";
                    return;

                }
            }

        }
        document.getElementById('demo9').innerHTML = "WRONG ANSWER!!!!";
        document.getElementById("demo10").innerHTML = "<center><button id='showansbtn' onclick='answers()'>GET THE  CORRECT SENTENCE</button></center>"



    }
    else if (x == "hindi") {

        finishedsentence = finishedsentence.trim();
        //var j=0;
        //var k=eng[j].length;
        for (var j = 0; j < hin.length; j++) {
            var k = hin[j].length;
            for (var m = 0; m < k; m++) {
                var str = hin[j][m];
                var n1 = str.localeCompare(finishedsentence);
                // console.log(j, str.localeCompare(finishedsentence), str, str.length, finishedsentence, finishedsentence.length);
                if (n1 == 0) {
                    document.getElementById('demo9').innerHTML = "right answer!!!";
                    return;

                }

            }
        }
        document.getElementById('demo9').innerHTML = "WRONG ANSWER!!!";
        document.getElementById("demo10").innerHTML = "<center><button id='showansbtn' onclick='answers()'>GET THE  CORRECT SENTENCE</button></center>"
    }
}
function answers() {
    var x = document.getElementById('lang').value;
    answer = "";
    if (x == "english") {
        var correct = eng[number].length;
        document.getElementById("demo10").innerHTML = "<center><button id='showansbtn1' onclick='hide()'>Hide the Correct sentence</button></center>"
        for (var i = 0; i < correct; i++) {
            answer += "<center>" + eng[number][i] + "</br></center>"
        }
        document.getElementById("demo11").innerHTML = answer;


    }
    else if (x == "hindi") {
        var correct = hin[number].length;
        document.getElementById("demo10").innerHTML = "<center><button id='showansbtn1' onclick='hide()'>Hide the Correct sentence</button></center>"
        for (var i = 0; i < correct; i++) {
            answer += "<center>" + hin[number][i] + "</br></center>"
        }
        document.getElementById("demo11").innerHTML = answer;


    }
}
function hide() {
    document.getElementById("demo10").innerHTML = "<center><button id='showansbtn1' onclick='tooglefunc()'>GET ANSWERS</button></center>"
    document.getElementById("demo11").innerHTML = "";

}
function tooglefunc() {
    while (document.getElementById("demo11").innerHTML == "") {
        document.getElementById("demo10").innerHTML = "<center><button id='showansbtn1' onclick='hide()'>Hide The Correct answer</button></center>"
        document.getElementById("demo11").innerHTML = answer;
    }
}