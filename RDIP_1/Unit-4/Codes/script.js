var corpus = ['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.', 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.', 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'];
var eswar = "";
function corpusfun() {
    if (document.getElementById("default").selected)
        alert('Select a corpus');
    else {
        document.getElementById('continuebutton').innerHTML = "";
        document.getElementById('position').innerHTML = "";
        if (document.getElementById("cor1").selected) {
            document.getElementById("text").innerHTML = corpus[0];
            eswar = corpus[0];
        }
        else if (document.getElementById("cor2").selected) {
            document.getElementById("text").innerHTML = corpus[1];
            eswar = corpus[1];
        }
        else if (document.getElementById("cor3").selected) {
            document.getElementById("text").innerHTML = corpus[2];
            eswar = corpus[2];
        }
        document.getElementById("tabletext").innerHTML = "<center>Enter the number of tokens and types for the above corpus:</center><table><tr><td>#tokens:</td><td><input type='text' id='token' value=''/></td></tr><tr><td>#types:</td><td><input type='text' id='type' value=''/></td></tr></table>";
        document.getElementById("submitbutton").innerHTML = "<br><center><button onclick='Val()'>Submit</button></center>";
    }
}
function Val() {
    var war = eswar, array = [], uniqwordcou = 0, e1 = 0, e2 = 0;
    war = war.replace(/[^\w\s]/gi, "");
    war = war.replace(/[ ]{2,}/gi, " ");
    var uniqword = war.toLowerCase().split(' ');
    war = war.split(' ').length;
    for (var j = 0; j < uniqword.length; j++)
        array[j] = 0;
    var j = 0, k;
    while (j != uniqword.length) {
        k = uniqword[j];
        if (array[uniqword.indexOf(k)] == 0) {
            array[uniqword.indexOf(k)] = 1;
            uniqwordcou++;
        }
        j++;
    }
    var took = parseInt(document.getElementById('token').value);
    var typ = parseInt(document.getElementById('type').value);
    if (war == took)
        document.getElementById("token").style.backgroundColor = "lightgreen";
    else{
        e1=1;
        document.getElementById("token").style.backgroundColor="red";
    }
    if (uniqwordcou = typ)
        document.getElementById("type").style.backgroundColor = "lightgreen";
    else {
        document.getElementById("type").style.backgroundColor = "red";
        e2 = 1;
    }
    if (e1 == 1 || e2 == 1)
        document.getElementById('position').innerHTML = "<br><center><p style='color:red'>Wrong Answer</p></center>";
    else {
        document.getElementById('position').innerHTML = "<br><center><p style='color:darkgreen'>Right Answer</p></center>";
        document.getElementById('continuebutton').innerHTML = "<br><center><button onclick='New()'>Continue</button></center>";
    }

}
function New() {
    document.getElementById('submitbutton').innerHTML = "<br><center><p id='stmt'>Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types.</p></center>";
    document.getElementById('position').innerHTML = "<center><p id='newtext'>#new types:</p><input type='text' id='newtype' value=''/></center>";
    document.getElementById('continuebutton').innerHTML = "<br><center><button onclick='stems()'>Submit</button></center>";
}
function stems() {
    var stemm = new Snowball('English');
    stemm.setCurrent('abbreviations');
    stemm.stem();
    console.log(stemm.getCurrent());
}