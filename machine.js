var sorteados = [];
var tamanho = 5;
var valorMaximo = 78;

function rerollChampion() {
  var ItenHabilitado = document.getElementById("SupItens").checked;
  console.log(ItenHabilitado);
  let Escolhido = 1 + Math.round(Math.random() * 120);
  fetch("json/Campeos.json")
    .then((resposta) => resposta.json())
    .then((json) => {
      for (let fim = 0; fim < json.length; fim++) {
        if (Escolhido == Number(json[fim]["Codigo"])) {
          var foto = "img/Champions/Champion(" + json[fim]["Codigo"] + ").jpeg";
          document.getElementById("image").src = foto;
          document.getElementById("name").innerHTML = json[fim]["Nome"];
          document.getElementById("frase").innerHTML = json[fim]["Frase"];
          document.getElementById("bota").src = "";
          bota(json[fim]["Dano"]);
          item(json[fim]["Dano"], json[fim]["Alcance"],ItenHabilitado);
          RunaE();
          fim = 120;
        }
      }
    });
}

// "ID": 77,
// "Nome": "Escudo Relicário"
// "ID": 75,
// "Nome": "Moeda Antiga"
// "ID": 76,
// "Nome": "Foice Espectral"


// "ID": 66,
// "Nome": "Aproximação Invernal"
// "ID": 43,
// "Nome": "Cajado Do Arcanjo"
// "ID": 11,
// "Nome": "Manamune"




async function item(Dano, Alcan,SemSup) {
  var itemSuEs = false;
  if (SemSup) {
    itemSuEs = true;
  }
  var manaItem = false;
  // var Terminus = false; ver isso
  var Escolhidos = [];
  let Bescolhido;
  var Fescolhido;
  var Reposta = await fetch("json/Itens.json");
  var Item = await Reposta.json();
  for (let x = 1; x < 6;) {
    document.getElementById("Item" + x).src = "";
    var image = document.getElementById("Item" + x)
    Fescolhido = true; 
    while (Fescolhido) {
      console.log( Item.length);
      Bescolhido = Math.round(Math.random() * Item.length);
      let classe = Item[Bescolhido]["Dano"];
      console.log(Bescolhido);
      console.log(Item[Bescolhido]["Nome"]);
      console.log(Item[Bescolhido]["Serie"]);
      if (!Escolhidos.includes(Item[Bescolhido]["ID"])) {
        if (!(itemSuEs && Item[Bescolhido]["Serie"] == "Sup")) {
          if(Item[Bescolhido]["Serie"] == "Sup")
          itemSuEs = true;
          if (!(manaItem && Item[Bescolhido]["Serie"] == "Mana")) {
            if(Item[Bescolhido]["Serie"] == "Mana")
            manaItem = true;
          
          if (!(!(Alcan == "P") && Item[Bescolhido]["ID"] == "Ranged")) {
            if ((Dano == classe || "MM" == Dano || classe == "MM")) {
              var foto = "img/Itens/Item(" + Item[Bescolhido]["ID"] + ").jpg";
              document.getElementById("Item" + x).src = foto;
              x++;
              Escolhidos.push(Item[Bescolhido]["ID"]);
            }
            if (document.getElementById("Item" + x).src != image) {
              Fescolhido = false;
            }
          }
        }
      }
      }
    }
  console.log(Escolhidos);
  }
}








// async function item(Dano, Alcan) {
//   var itemSuEs = false;
//   var manaItem = false;
//   var Escolhidos = [];
//   let Bescolhido;
//   var Fescolhido;
//   var Reposta = await fetch("json/Itens.json");
//   var Item = await Reposta.json();
//   for (let x = 1; x < 6;) {
//     document.getElementById("Item" + x).src = "";
//     var image = document.getElementById("Item" + x)
//     Fescolhido = true;
//     while (Fescolhido) {
//       Bescolhido = Math.round(Math.random() * 77);
//       // console.log(Bescolhido);
//       let classe = Item[Bescolhido]["Dano"];
//       // console.log(Bescolhido);
//       // console.log(Item[Bescolhido]["Nome"]);
//       if (!Escolhidos.includes(Item[Bescolhido]["ID"])) {
//         if (!(itemSuEs && Item[Bescolhido]["Serie"] == "Sup")) {
//           if(Item[Bescolhido]["Serie"] == "Sup")
//           itemSuEs = true;
//           if (!(manaItem && Item[Bescolhido]["Serie"] == "Mana")) {
//             if(Item[Bescolhido]["Serie"] == "Mana")
//             manaItem = true;

//           if (!(Alcan == "P" && Item[Bescolhido]["Serie"] == Ranged)) {
//             // if (!Escolhidos.includes(Item[Bescolhido]["ID"])) {
//             //   if ((!Escolhidos.includes() && Item[Bescolhido]["ID"] == 2) || (Escolhidos.includes() && Item[Bescolhido]["ID"] == 2) || (Escolhidos.includes() && Item[Bescolhido]["ID"] == 2)) {
//             //     if ((!Escolhidos.includes() && Item[Bescolhido]["ID"] == 3) || (!Escolhidos.includes() && Item[Bescolhido]["ID"] == 3) || (!Escolhidos.includes() && Item[Bescolhido]["ID"] == 3)) {
//             if ((Dano == classe || "MM" == Dano || classe == "MM")) {
//               // console.log(classe, Item[Bescolhido]["ID"]);
//               var foto = "img/Itens/Item(" + Item[Bescolhido]["ID"] + ").jpg";
//               // console.log(foto);
//               document.getElementById("Item" + x).src = foto;
//               x++;
//               Escolhidos.push(Item[Bescolhido]["ID"]);
//             }
//             // alert(document.getElementById("Item" + x).src+"Link | Antes"+image);
//             if (document.getElementById("Item" + x).src != image && document.getElementById("Item" + x).src != null) {
//               Fescolhido = false;
//             }
//             //     }
//             //   }
//             // }
//             // }
//           }
//         }
//       }
//       }
//     }
//   // console.log(Escolhidos);
//   }
// }








// function Item() {
//   for (let escolhidos = 0; escolhidos < 6; escolhidos++) {
//     sugestao = Math.round(Math.random() * valorMaximo);
//     while (sorteados.indexOf(sugestao) >= 0) {
//       sugestao = Math.round(Math.random() * valorMaximo);
//     }
//     sorteados.push(sugestao);
//     alert(sorteados[escolhidos]);
//   }
// }

async function bota(Dano) {
  let Bescolhido;
  document.getElementById("bota").src = "";
  var image = document.getElementById("bota").src
  var Reposta = await fetch("json/Botas.json");
  var Bota = await Reposta.json();
  var Fescolhido = true;
  while (Fescolhido) {
    Bescolhido = Math.round(Math.random() * 7);
    // console.log(Bescolhido);
    let classe = Bota[Bescolhido]["Classe"];
    if (Dano == classe || "MM" == Dano || classe == "MM") {
      // console.log(classe, Bota[Bescolhido]["ID"]);
      var foto = "img/BootsFeiticos/Bota(" + Bota[Bescolhido]["ID"] + ").jpg";
      document.getElementById("bota").src = foto;
    }
    if (document.getElementById("bota").src != image) {
      Fescolhido = false;
    }
  }
}


//1°
// function bota(Dano) {
//   let Bescolhido;
//   let vez = 1;
//   var Fescolhido = true;
//   while(Fescolhido)
//   {
//     vez = 1;
//   Bescolhido = Math.round(Math.random()*7);
//   // alert(Bescolhido+" Ale");
//   fetch("Botas.json")
//     .then((resposta) => resposta.json())
//     .then((json) => {
//       if(vez == 1)
//       {
//       console.log(Bescolhido);
//       console.log(json[Bescolhido]);
//       let classe = json[Bescolhido]["Classe"];
//       if (Dano == classe || "MM" == Dano || classe == "MM") {
//         var foto = "img/BootsFeiticos/Bota("+json[Bescolhido]["ID"]+").jpg";
//         document.getElementById("bota").src = foto;
//         // alert(document.getElementById("bota").src);
//         // alert(foto);
//         bota(json[Bescolhido]["Classe"]);
//       }
//     }
//     });
//     if (document.getElementById("bota").src != "") {
//       Fescolhido = false;
//     }
//   }
// }

// async function printJSON() {
//   const response = await fetch("Campeos.json");
//   const json = await response.json();
//   console.log(json);
// }

//   fetch("Campeos.json")
// .then(response => response.json())
// .then(json => console.log(json));


async function RunaE() {
  var Escolhidos = [];
  let Bescolhido;
  var Pescolhido;
  var Reposta = await fetch("json/Runas.json");
  var runa = await Reposta.json();
  Bescolhido = 1+Math.round(Math.random() * 11);
  document.getElementById("Runa1").src = "img/Runas/Runa("+Bescolhido+").jpeg";
  Bescolhido = 1+Math.round(Math.random() * 3);
  if(Bescolhido == 1)
  {Pescolhido = "Dominação";}
  else if(Bescolhido == 2)
  {Pescolhido = "Precisão";}
  else if(Bescolhido == 3)
  {Pescolhido = "Determinação";}
  else
  {Pescolhido = "Inspiração";}
  let final = true;

  let foi1 = false;
  let foi2 = false;
  let foi3 = false;
  while(final) {
    // alert(foi1)
    Bescolhido = 12+Math.round(Math.random() * 38);
    // alert("Escolhido:  "+Bescolhido);
    let classe = runa[Bescolhido]["Classe"];
    let ordem = runa[Bescolhido]["Ordem"];
    let id = runa[Bescolhido]["ID"];
    // alert("Classe: "+classe+"|  Escolhida: "+Pescolhido+" Ordem: "+ordem+" | ID: "+id);
    if(classe == Pescolhido)
    {
      // alert(ordem);
      switch (ordem) {
        case "S1":
          // alert("S!!!!!!!!!");
          if(!foi1){
            // alert("Escolhido");
          document.getElementById("Runa3").src = "img/Runas/Runa("+id+").jpeg";
          foi1 = true;
          }
          break;
        case "S2":
          // alert("S@@@@@@@@@");
          if(!foi2){
            // alert("Escolhido");
          document.getElementById("Runa4").src = "img/Runas/Runa("+id+").jpeg";
          foi2 = true;
          }
          break;
        case "S3":
          // alert("S#########");
          if(!foi3){
            // alert("Escolhido");
          document.getElementById("Runa5").src = "img/Runas/Runa("+id+").jpeg";
          foi3 = true;
          }
          break;
      
        default:
          break;
      }
    }
    // alert(foi1+" | "+foi2+" | "+foi3)
    if(foi1== true &&foi2 == true &&foi3 == true )
    {
      final = false;
    }
  }
  final = true;
  while(final)
  {
    Bescolhido = 12+Math.round(Math.random() * 38);
    let classe = runa[Bescolhido]["Classe"];
    let ordem = runa[Bescolhido]["Ordem"];
    let id = runa[Bescolhido]["ID"];
    if(!(Pescolhido == classe))
    {
      document.getElementById("Runa2").src = "img/Runas/Runa("+id+").jpeg";
      final = false
    }
    
  }
}

