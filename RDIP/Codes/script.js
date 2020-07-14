var english = [["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"],
["some students like to study in the night", "at night some students like to study"],
["John and Mary went to church", "Mary and John went to church"],
["John went to church after eating", "after eating John went to church", "John after eating went to church"],
["did he go to market", "he did go to market"],
["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"],
["John goes to the library and studies", "John studies and goes to the library"],
["John ate an apple so did she", "she ate an apple so did John"],
["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"]];

var hindi = [["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", "बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", "है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"]];

function selectlang() {
    var lang = document.getElementById('select-lang').value;
    document.getElementById("d1").innerHTML = " <center> Form a sentence (Declarative or Interrogative or any other type) from the given words </center>";
    document.getElementById("d2").innerHTML = "<center>(select the buttons in proper order)</center>";
    if (lang == "english") {
        var num = parseInt(Math.random() * 10);
        var num1 = english[num][0];
        var sen = num1.split(" ");
        var wordarr = new Array();
        while (wordarr.length < sen.length) {
            var j = parseInt(Math.random() * sen.length);
            var n = wordarr.includes(sen[j]);
            if (n != true) {
                wordarr.push(sen[j]);
            }
        }
        var buttoncount = 0;
        var button = "";
        var spbutton = "";
        for (var i = 0; i < wordarr.length; i++) {
            button = " <button id='btn" + i + "' onclick='display(this.id,this.value)' value='" + wordarr[i] + "'>" + wordarr[i] + "</button>  ";
            spbutton += button + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            buttoncount += 1;
        }
        document.getElementById("ans").innerHTML = spbutton.trim();
        return;
    }
    if (lang == "hindi") {
        var numm = parseInt(Math.random() * 10);
        var num1 = hindi[numm][0];
        var sen1 = num1.split(" ");
        var wordarr1 = new Array();
        while (wordarr1.length < sen1.length) {
            var j1 = parseInt(Math.random() * sen1.length);
            var n1 = wordarr1.includes(sen1[j1]);
            if (n1 != true) {
                wordarr1.push(sen1[j1]);
            }
        }
        var buttoncount11 = 0;
        var button1 = "";
        var spbutton1 = "";
        for (var i1 = 0; i1 < wordarr1.length; i1++) {
            button1 = " <button id='btn" + i1 + "' onclick='display(this.id,this.value)' value='" + wordarr1[i1] + "'>" + wordarr1[i1] + "</button>  ";
            spbutton1 += button1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            buttoncount11 += 1;
        }
        document.getElementById("ans").innerHTML = spbutton1.trim();
        return;
    }
}
var wordcount = 0;
var buttoncount = 0;
var finishedsentence = "";
var originalsentence = "";
var initialvalues = "";
function display(id, value) {
    document.getElementById("demo3").innerHTML = "Formed Sentence (after selecting words):";
    finishedsentence += value + " ";
    document.getElementById("demo4").innerHTML = finishedsentence;
    document.getElementById(id).style.display = "none";
    document.getElementById("demo6").innerHTML = "<center><button id='reform' onclick='resets(initialvalues)'>Re-form the sentence</button></center>"
    wordcount++;
    if (wordcount == buttoncount) {
        document.getElementById("demo7").innerHTML = "<center><button id='check' onclick='checkfunc()'>Check the correctness of sentence</button></center>"
    }
    return true;
}
function resets(initialvalues) {
    document.getElementById("demo3").innerHTML = "";
    document.getElementById("demo4").innerHTML = "";
    document.getElementById("demo5").innerHTML = "";
    document.getElementById("demo6").innerHTML = "";
    document.getElementById("demo7").innerHTML = "";
    document.getElementById("demo8").innerHTML = "";
    document.getElementById("demo9").innerHTML = "";
    document.getElementById("demo10").innerHTML = "";
    wordcount = 0;
    finishedsentence = "";
    document.getElementById("ans").innerHTML = initialvalues;
    
    return true;
}
