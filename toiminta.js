// Sekoitetaan taulukko, lainattu discordbotilta Lanttupoika https://github.com/tupepi/lanttupoika/blob/main/commands/parita.js
// Todellinen lähde stack overflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function sekoitaParit(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  // Palautetaan sekoitettu taulukko
  return array;
}

function haeParit() {
  nimet = document.getElementById("nimet").value;
  nimet_t = nimet.split("\n");
  for (let i = 0; i < nimet_t.length; i++) {
    if (nimet_t[i] == "") {
      nimet_t.splice(i, 1);
      i--;
    }
  }
  console.log(nimet_t);
  return nimet_t;
}

function tulostaParit(taulu) {
  paikka = document.getElementById("parit_tulostus");

  for (let i = 0; i < taulu.length - 1; i++) {
    let uusi = document.createElement("div");
    let tamaKierros = taulu[i] + " & " + taulu[i + 1];
    uusi.textContent = tamaKierros;
    paikka.appendChild(uusi);
    i++;
  }
  if (taulu.length % 2 != 0) {
    let yksinainen = document.createElement("div");
    yksinainen.textContent = taulu[taulu.length - 1];
    paikka.appendChild(yksinainen);
  }
}

function parita() {
  //tyhjennä viimeisimmät
  document.getElementById("parit_tulostus").textContent = "";
  taulukko = haeParit();
  sekoitettu_taulukko = sekoitaParit(taulukko);
  tulostaParit(sekoitettu_taulukko);
}

window.addEventListener("load", function () {});
