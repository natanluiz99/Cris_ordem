

//--------------------------------------------------------------------------------//

const buttonsContainer = document.getElementById('buttonsContainer');
  const nameElement = document.getElementById('name');

  const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L','M','N','O','P','Q','R','S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const imageUrls = [
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175126785671835698/image.png?ex=656a191a&is=6557a41a&hm=851e9a762186bcba0c05fce7623e31e6f9471c796e898a215814b10e7f077fe2&',
    'https://media.discordapp.net/attachments/1130554247113613412/1175126838759129190/image.png?ex=656a1927&is=6557a427&hm=adb79457d4ef74fe24bdff4c4ce22d0fe5ce30a589fd39ba96d96ae1c006f2e9&=',
    'https://media.discordapp.net/attachments/1130554247113613412/1175126877325770752/image.png?ex=656a1930&is=6557a430&hm=e17ec71742c2c3ab22979671ac507b34d118cf056acb30e37fdfa8d00a8a2458&=',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175126918220238869/image.png?ex=656a193a&is=6557a43a&hm=159132baa7376b2782f3a245869038ec687b344993b06cd4d7a831be3aaa1ea1&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175127079633833995/image.png?ex=656a1960&is=6557a460&hm=2cdfb1bc921f3d38510be4b7322899ebdc43819fd221657ea2d96907e10d870d&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175127150932795413/image.png?ex=656a1971&is=6557a471&hm=e4555d0d1d2cd068d09cd3a42d947c9a7f01c75798205e08e9440f9b32923c08&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175127215155986523/image.png?ex=656a1980&is=6557a480&hm=5387f6a5ab2af08806cdc1635876b434636fbdff09a37ca6be9cc2a257e49309&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175127300526833756/image.png?ex=656a1995&is=6557a495&hm=8cd26bd3823abf5539f3d099bbff0199c3b071b6bf6a6aad8d1bdc397eba8393&',
    /* 8 - H */
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203024260579389/image.png?ex=656a601b&is=6557eb1b&hm=f5831f49422e5ed034f72e9a289aa23db7332340abc94d173bebaa63dd0541e2&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203232591642675/image.png?ex=656a604c&is=6557eb4c&hm=cd3eeb1335083424de38f708111444430dc2d0b3911bab46406310dc670eaeb1&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203328205013032/image.png?ex=656a6063&is=6557eb63&hm=cc5997914425d612171ee756f9723dff5d8637f084ea29585f5c2e94d4a55bd6&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203425538019480/image.png?ex=656a607a&is=6557eb7a&hm=05e44a697a63525f2deb81027c35aaa2aeaf6020913ed03370d1f1c14fa3edf0&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203560150024253/image.png?ex=656a609a&is=6557eb9a&hm=8b733439ee9ad50ca4f1b73422dcff371f0a57a32bb0de921a66351e524786a1&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203617435811931/image.png?ex=656a60a8&is=6557eba8&hm=b8a16b34578b7115e930389a6c5a3dee4507138bc02ec1e5c9e76686fa77f430&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203690643193897/image.png?ex=656a60ba&is=6557ebba&hm=3b694eaefb3dcf8dde2c4de0646f7b03f6e62cbead9bb00396a59bacf2275d31&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203733739683840/image.png?ex=656a60c4&is=6557ebc4&hm=1781718cca5b21cad30d5fbd6a60a8b8d6bb4584506cabf392962d295679cfd4&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203805416132629/image.png?ex=656a60d5&is=6557ebd5&hm=3df7fb360cf5da095724aca3d45ccd446f53ae04937eb27e7b08c582b78cbae1&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203849720561685/image.png?ex=656a60e0&is=6557ebe0&hm=99100fcc9628c7aaa52ddb9944038035f158113458f4f76533f75fa4ee0cdebf&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203905261543464/image.png?ex=656a60ed&is=6557ebed&hm=8bd99d0fbd352bd3932693aad4cc10270f15c150c6911d7b204d1d3f5ff4cf06&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175203966448046221/image.png?ex=656a60fb&is=6557ebfb&hm=cf93aa73300f3928b411ad7c744ab1df0c95381e65bf78f227a6899fe51183fa&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204023243128962/image.png?ex=656a6109&is=6557ec09&hm=286df47885407adc5bd6168335b56b1fc6f285ecd38d76baca0831efed91bf4c&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204087197868062/image.png?ex=656a6118&is=6557ec18&hm=2ce841c65b42128c5735baa549900304fd6fabca0d89cbdb912247270fabc00c&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204130109792286/image.png?ex=656a6122&is=6557ec22&hm=508aea4338481546fd428f976dad221f5d5b5bb34ec20e848eb769f541105c36&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204173281759343/image.png?ex=656a612d&is=6557ec2d&hm=8c0c4acc6e68fc05e0b0771c724c673cb16f2f468f98ea3bff979fb17277a6c6&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204229426720869/image.png?ex=656a613a&is=6557ec3a&hm=af7193fe3e94aee8e1be496a235c2b0c8748e97cbc38258166d975d057c0aecb&',
    'https://cdn.discordapp.com/attachments/1130554247113613412/1175204272946823198/image.png?ex=656a6144&is=6557ec44&hm=64427f94dec369560a40fa5c4743c840b6506bbbf164968b6c0cff00a8654f4a&',
    
  ];

  symbols.forEach((symbol, index) => {
    const button = document.createElement('button');
    button.className = 'button2';
    button.addEventListener('click', () => {
      setLetter(symbol);
    });

    const img = document.createElement('img');
    img.src = imageUrls[index];
    img.className = 'simbolos';

    button.appendChild(img);
    buttonsContainer.appendChild(button);
  });

  function setLetter(letter) {
    // Your code logic here
    nameElement.textContent = letter;
  }

// ----------------------------------------------------------------------------------//

new gridjs.Grid({
  columns: ["Nome", "Status", "Missão delegada"],
  data: [["João Guilherme", "Vivo", "Mantiqueira"], ["Augusto souza", "Vivo", "Mantiqueira"], ["Victória pantoja", "Vivo", "Mantiqueira"]],

}).render(document.getElementById("diva"));

function setLetter(letter) {
  document.getElementById('name').innerHTML = document.getElementById('name').innerHTML + letter;
}



for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  c = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

var setLetter = function(x) {
  document.getElementById('name').innerHTML += x;
};

//---------------------------------------------------------------------------//

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

//-------------------------------------------------------------------------//


