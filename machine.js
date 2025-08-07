var escholidoC, escholidoB, escholidoI;

function campeao() {
    var nome, titulo, foto, Alcance, dano;

    var ataques = fetch('./json/Campeos.json')
        .then(campaeos => campaeos.json())
        .then(campea => {
            escholidoC = Math.floor(Math.random() * campea.length);
            nome = campea[escholidoC]["Nome"];
            titulo = campea[escholidoC]["Frase"];
            foto = "img/Champions/Champion(" + (escholidoC + 1) + ").jpeg";
            Alcance = campea[escholidoC]["Alcance"];
            Dano = campea[escholidoC]["Dano"];
            document.getElementById("name").innerHTML = nome;
            document.getElementById("frase").innerHTML = titulo;
            document.getElementById("image").src = foto;
            return { Alcance, Dano };
        });

    document.getElementById("name").value = nome;
    document.getElementById("frase").value = titulo;
    document.getElementById("image").src = foto;
    return ataques;
}

function bota(DadosAtk) {
    fetch('./json/Botas.json')
        .then(BotasObj => BotasObj.json())
        .then(Bota => {
            var foto = "";
            DadosAtk.then(dados => {
                while (foto == "") {
                    escholidoB = Math.floor(Math.random() * Bota.length);
                    if (dados["Dano"] == Bota[escholidoB]["Classe"] || Bota[escholidoB]["Classe"] == "MM") {
                        foto = "img/BootsFeiticos/Bota(" + (escholidoB + 1) + ").jpg";
                        document.getElementById("bota").src = foto;
                    }
                }
            });
        });
}

function runas() {
    fetch('./json/Runas.json')
        .then(RunasObj => RunasObj.json())
        .then(Runas => {
            //PR
            var foto = "";
            while (foto == "") {
                escholidoB = Math.floor(Math.random() * Runas.length);
                if (Runas[escholidoB]["Ordem"] == "PR")
                    foto = "img/Runas/Runa(" + (escholidoB + 1) + ").jpeg";
                document.getElementById("Runa1").src = foto;
            }
            // Segunda: Dominação,Precisão,Determinação e Inspiração
            var foto = "", foto2 = "", foto3 = "";
            var Classe = ["Dominação", "Precisão", "Determinação", "Inspiração"];
            var ClasseEsco = Classe[Math.floor(Math.random() * Classe.length)];
            while (foto == "") {
                escholidoB = Math.floor(Math.random() * Runas.length);
                if (Runas[escholidoB]["Ordem"] == "S1" && ClasseEsco == Runas[escholidoB]["Classe"])
                    foto = "img/Runas/Runa(" + (escholidoB + 1) + ").jpeg";
                document.getElementById("Runa3").src = foto;
            }

            while (foto2 == "") {
                escholidoB = Math.floor(Math.random() * Runas.length);
                if (Runas[escholidoB]["Ordem"] == "S2" && ClasseEsco == Runas[escholidoB]["Classe"])
                    foto2 = "img/Runas/Runa(" + (escholidoB + 1) + ").jpeg";
                document.getElementById("Runa4").src = foto2;
            }

            while (foto3 == "") {
                escholidoB = Math.floor(Math.random() * Runas.length);
                if (Runas[escholidoB]["Ordem"] == "S3" && ClasseEsco == Runas[escholidoB]["Classe"])
                    foto3 = "img/Runas/Runa(" + (escholidoB + 1) + ").jpeg";
                document.getElementById("Runa5").src = foto3;
            }
            // Terceira: != de PR e Segunda
            var foto = "";
            while (foto == "") {
                escholidoB = Math.floor(Math.random() * Runas.length);
                if (Runas[escholidoB]["Ordem"] != "PR" && ClasseEsco != Runas[escholidoB]["Classe"])
                    foto = "img/Runas/Runa(" + (escholidoB + 1) + ").jpeg";
                document.getElementById("Runa2").src = foto;
            }
        });
}

function itens(DadosAtk) {
    var Serie = [false, false, false]; // 0 - Gota, 1 - Sup, 2 - Arco
    var escholidos = [];
    var foto = "";
    fetch('./json/Itens.json')
        .then(itemObj => itemObj.json())
        .then(item => {
            DadosAtk.then(dados => {
                for (let x = 0; x < 6; x++) {
                    foto = "";
                    while (foto == "") {
                        escholidoI = Math.floor(Math.random() * item.length);
                        console.log(escholidos);
                        if (!escholidos.includes(escholidoI)) { // ve se já foi escolhido
                            if (!(Serie[0] && item[escholidoI]["Serie"] == "Gota")) { // ve se ja tem um item de gota
                                if (!(Serie[1] && item[escholidoI]["Serie"] == "Sup")) { // ve se ja tem um item de Sup
                                    if (!(Serie[2] && (item[escholidoI]["Serie"] == "Ranged" && dados["Alcance"] != "P"))) { // ve se ja tem um item de Ranged e é ranged
                                        console.log(dados["Dano"] +"   ||  "+ item[escholidoI]["Dano"])
                                        if (dados["Dano"] == "MM" || dados["Dano"] == item[escholidoI]["Dano"]) {
                                            escholidos.push(escholidoI);
                                            foto = "img/Itens/Item(" + (escholidoI + 1) + ").jpg";
                                            if (item[escholidoI]["Serie"] != "") {
                                                if (item[escholidoI]["Serie"] == "Gota") {
                                                    Serie[0] = true;
                                                }
                                                if (item[escholidoI]["Serie"] == "Sup") {
                                                    Serie[1] = true;
                                                }
                                                if (item[escholidoI]["Serie"] == "Ranged") {
                                                    Serie[2] = true;
                                                }
                                            }

                                        }
                                    }
                                }
                            }
                        }
                        console.log(foto);
                        document.getElementById("Item" + (x + 1)).src = foto;
                    }
                }
            });
        });
}

function radomizer() {
    var dadosC = campeao();
    itens(dadosC);
    runas();
    bota(dadosC);
}