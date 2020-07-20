var ENGLISH = ['The child liked the chocolate','She was stopped by the bravest knight','Mary baked a cake for his birthday','She decorated the cake carefully','Mary wore a dress with polka dots'];
var HINDI = ['राम ने सीता के लिए फल तोड़ा।', 'छोटे बच्चे पाठशाला जल्दी आयेंगे।', 'मेहनत का फल मीठा होता है।', 'वाह! वह खूबसूरत है।', 'पेड़ से पत्ते गिर गए।'];
var sentences = "";

function selection() {
    if (document.getElementById('default').selected)
        alert('Please select the given Languages');
    else {
        document.getElementById('dropdown1').innerHTML = "<center><select id='dropdown2' onchange='disk()'><option id='default1' value='Select a sentence'>---Select a sentence---</option><option id='e1'></option><option id='e2'></option><option id='e3'></option><option id='e4'></option><option id='e5'></option></select></center>";
        document.getElementById('text').innerHTML = "";
        document.getElementById('post').innerHTML = "";
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
    sentence = "";
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
    }
    else if (document.getElementById('hindi').selected) {
        if (document.getElementById('e1').selected)
            sentence = HINDI[0];
        else if (document.getElementById('e2').selected)
            sentence = HINDI[1];
        else if (document.getElementById('e3').selected)
            sentence = HINDI[2];
        else if (document.getElementById('e4').selected)
            sentence = HINDI[3];
        else if (document.getElementById('e5').selected)
            sentence = HINDI[4];
    }
    sentence = sentence.split(" ");
    var column = "<tr id='rowhead' style='color:brown'><td>LEXICON</td><td>POS</td><td></td><td></td></tr>";
    for (var j = 0; j < sentence.length; j++)
        column = column + "<tr id='id" + j + "'><td>" + sentence[j] + "</td><td></td><td></td><td></td></tr>";
    document.getElementById('post').innerHTML = column.trim();

}