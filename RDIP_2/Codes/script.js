var ENGLISH = ['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];
var HINDI = ['राम ने सीता के लिए फल तोड़ा।', 'छोटे बच्चे पाठशाला जल्दी आयेंगे।', 'मेहनत का फल मीठा होता है।', 'वाह! वह खूबसूरत है।', 'पेड़ से पत्ते गिर गए।'];
var hindianswers = [["Noun", "Postposition", "Noun", "Postposition", "Postposition", "Noun", "Verb"], ["Adjective", "Noun", "Noun", "Adverb", "Verb"], ["Noun", "Postposition", "Noun", "Adjective", "Verb", "Verb"], ["Interjection", "Pronoun", "Adjective", "Verb"], ["Noun", "Postposition", "Noun", "Verb", "Verb"]];
var sentences = "", postdrop, postvalue, englishanswer = [], index, sent = "",fun=0;

function selection() {
    if (document.getElementById('default').selected)
        alert('Please select the given Languages');
    else {
        document.getElementById('dropdown1').innerHTML = "<center><select id='dropdown2' onchange='disk()'><option id='default1' value='Select a sentence'>---Select a sentence---</option><option id='e1'></option><option id='e2'></option><option id='e3'></option><option id='e4'></option><option id='e5'></option></select></center>";
        document.getElementById('text').innerHTML = "";
        document.getElementById('post').innerHTML = "";
        document.getElementById('submitbutton').innerHTML = "";
        document.getElementById('getbutton').innerHTML = "";
        postvalue = [];
        if (document.getElementById('english').selected) {
            document.getElementById('e1').innerHTML = ENGLISH[0];
            document.getElementById('e2').innerHTML = ENGLISH[1];
            document.getElementById('e3').innerHTML = ENGLISH[2];
            document.getElementById('e4').innerHTML = ENGLISH[3];
            document.getElementById('e5').innerHTML = ENGLISH[4];
        }
        else if (document.getElementById('hindi').selected) {
            document.getElementById('e1').innerHTML = HINDI[0];
            document.getElementById('e2').innerHTML = HINDI[1];
            document.getElementById('e3').innerHTML = HINDI[2];
            document.getElementById('e4').innerHTML = HINDI[3];
            document.getElementById('e5').innerHTML = HINDI[4];
        }
    }
}
function disk() {
    sentence = "", postvalue = [], sent = "", englishanswer = [];
    document.getElementById('text').innerHTML = "<center><i>Select the POS tag for corresponding words</i></center>";
    if (document.getElementById('english').selected) {
        if (document.getElementById('e1').selected)
            sentence = ENGLISH[0];
        else if (document.getElementById('e2').selected)
            sentence = ENGLISH[1];
        else if (document.getElementById('e3').selected)
            sentence = ENGLISH[2];
        else if (document.getElementById('e4').selected)
            sentence = ENGLISH[3];
        else if (document.getElementById('e5').selected)
            sentence = ENGLISH[4];
        sent = sentence;
        sentence = sentence.replace(".","");
        postdrop = "<option id='pos1' value='Noun'>Noun</option><option id='pos2' value='Pronoun'>Pronoun</option><option id='pos3' value='Verb'>Verb</option><option id='pos4' value='Adjective'>Adjective</option><option id='pos5' value='Adverb'>Adverb</option><option id='pos6' value='Determiner'>Determiner</option><option id='pos7' value='Preposition'>Preposition</option><option id='pos8' value='Conjunction'>Conjunction</option><option id='pos9' value='Interjection'>Interjection</option>";
    }
    else if (document.getElementById('hindi').selected) {
        if (document.getElementById('e1').selected){
            sentence = HINDI[0];
            index=0;
        }
        else if (document.getElementById('e2').selected){
            sentence = HINDI[1];
            index=1;
        }
        else if (document.getElementById('e3').selected) {
            sentence = HINDI[2];
            index = 2;
        }
        else if (document.getElementById('e4').selected) {
            sentence = HINDI[3];
            index = 3;
        }
        else if (document.getElementById('e5').selected) {
            sentence = HINDI[4];
            index = 4;
        }
        sent = sentence;
        sentence = sentence.replace("।","");
        postdrop = "<option id='pos1' value='Noun'>Noun</option><option id='pos2' value='Pronoun'>Pronoun</option><option id='pos3' value='Verb'>Verb</option><option id='pos4' value='Adjective'>Adjective</option><option id='pos5' value='Adverb'>Adverb</option><option id='pos6' value='Postposition'>Postposition</option><option id='pos7' value='Conjunction'>Conjunction</option><option id='pos8' value='Interjection'>Interjection</option>";
    }
    sentence = sentence.split(" ");
    var column = "<tr id='rowhead' style='color:brown'><td>LEXICON</td><td>POS</td><td>Right or Wrong</td><td>Answers</td></tr>";
    for (var j = 0; j < sentence.length; j++) {
        column = column + "<tr id='id" + j + "'><td>" + sentence[j] + "</td><td><select id='postdropdown" + j + "' class='postdropdown' onchange='postselection(this.id,this.value)'>" + postdrop + "</select></td><td  id='img" + j + "'></td><td id='ans" + j + "'></td></tr>";
        postvalue[j] = "Noun";
    }
    document.getElementById('post').innerHTML = column.trim();
    document.getElementById('submitbutton').innerHTML = "<center><button onclick='userpostvalues()'>Submit</button></center>";
}	
function postselection(id, value) {
    if(id==='postdropdown0')
        postvalue[0]=value;
    else if(id==='postdropdown1')
        postvalue[1] = value;
    else if(id==='postdropdown2')
        postvalue[2] = value;
    else if(id==='postdropdown3')
        postvalue[3] = value;
    else if(id==='postdropdown4')
        postvalue[4] = value;
    else if(id==='postdropdown5')
        postvalue[5] = value;
    else if(id==='postdropdown6')
        postvalue[6] = value;

}
function userpostvalues() {
    console.log(postvalue, postvalue.length);
    postfunction();
}
function postfunction() {
    var idarray = ['img0', 'img1', 'img2', 'img3', 'img4', 'img5', 'img6'];
    if (document.getElementById('english').selected) {
        for (var j = 0; j < sentence.length; j++) {
            var docxy = nlp(sentence[j]);
            if ((docxy.nouns().text()) != "")
                englishanswer[j] = "Noun";
            else if ((docxy.pronouns().text()) != "")
                englishanswer[j] = "Pronoun";
            else if ((docxy.verbs().text()) != "")
                englishanswer[j] = "Verb";
            else if ((docxy.adjectives().text()) != "")
                englishanswer[j] = "Adjective";
            else if ((docxy.adverbs().text()) != "")
                englishanswer[j] = "Adverb";
            else if ((docxy.prepositions().text()) != "")
                englishanswer[j] = "Preposition";
            else if ((docxy.conjunctions().text()) != "")
                englishanswer[j] = "Conjunction";
            else
                englishanswer[j] = "Determiner";
            console.log(englishanswer);
        }
        for (var j = 0; j < sentence.length; j++) {
            if (postvalue[j] == englishanswer[j])
                document.getElementById(idarray[j]).innerHTML = '<center><img src="https://png.vector.me/files/images/1/2/123189/green_tick_clip_art.jpg" width="30" height="30"></center>';
            else {
                fun = 1;
                document.getElementById(idarray[j]).innerHTML = '<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsrDscW0GQmdjrKLj2ahgZC_xTMRq4NUMRdka4ii5cNlQYlo&s" width="30" height="30"></center>';
            }
        }
    }
    else if (document.getElementById('hindi').selected) {
        for (var j = 0; j < sentence.length; j++) {
            if (postvalue[j] == hindianswers[index][j])
                document.getElementById(idarray[j]).innerHTML = '<center><img src="https://png.vector.me/files/images/1/2/123189/green_tick_clip_art.jpg" width="30" height="30"></center>';
            else {
                fun = 1;
                document.getElementById(idarray[j]).innerHTML = '<center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsrDscW0GQmdjrKLj2ahgZC_xTMRq4NUMRdka4ii5cNlQYlo&s" width="30" height="30"></center>';
            }
        }
    }
    if (fun == 1)
        document.getElementById('getbutton').innerHTML = '<center><button>Get Answer</button></center>';
        document.getElementById('getbutton').innerHTML = '<center><button onclick="getanswer()">Get Answer</button></center>';
}
function getanswer()
{
    var answerid = ['ans0', 'ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6'];
    if (document.getElementById('english').selected) {
        for (var j = 0; j < sentence.length; j++)
            document.getElementById(answerid[j]).innerHTML = englishanswer[j];
    }
    else if (document.getElementById('hindi').selected) {
        for (var j = 0; j < sentence.length; j++)
            document.getElementById(answerid[j]).innerHTML = hindianswers[index][j];
    }
    document.getElementById('getbutton').innerHTML = '<center><button onclick="hideanswer()">Hide Answer</button></center>'
}
function hideanswer() {
    var answerid = ['ans0', 'ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6'];
    for (var j = 0; j < sentence.length; j++)
        document.getElementById(answerid[j]).innerHTML = "";
    document.getElementById('getbutton').innerHTML = '<center><button onclick="getanswer()">Get Answer</button></center>'
}