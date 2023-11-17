

new gridjs.Grid({
  columns: ["Nome", "Status", "Missão delegada"],
  data: [["João Guilherme", "Vivo", "Mantiqueira"], ["Augusto souza", "Vivo", "Mantiqueira"], ["Victória pantoja", "Vivo", "Mantiqueira"]],

}).render(document.getElementById("diva"));

function setLetter(letter) {
  document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;
}

var html = '';
var c;
for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

var setLetter = function(x) {
  document.getElementById('name').innerHTML += x;
};



function convertBinary() {
  var output = document.getElementById("outputBinary");
  var input = document.getElementById("inputBinary").value;
  output.value = "";
  for (i = 0; i < input.length; i++) {
    var e = input[i].charCodeAt(0);
    var s = "";
    do {
      var a = e % 2;
      e = (e - a) / 2;
      s = a + s;
    } while (e != 0);
    while (s.length < 8) {
      s = "0" + s;
    }
    output.value += s;
  }
}
