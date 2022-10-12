# Parigeneraattori
Opetustyötä varten tehty nykyaikainen ja suomenkielinen tapa jakaa lista nimiä pareiksi.

## Yleistä
Ryhmän jakaminen pareihin on iso osa opetustyötä. Ottamatta kantaa parityöskentelyn hyötyihin tai haittoihin opettajat usein teettävät paritöitä. Pareihin jaetaan myös usein satunnaisesti. Oman alani (tietotekniikan aineopettaja) tulevana asiantuntijana myssy + paperilappu -kombo on mielestäni parhaat päivänsä nähnyt. Tätä varten päätin koostaa kasaan oman tapani jakaa ryhmän pareihin, "randomisti".

Satunnaisuus on tietoteknisessä maailmassa kuitenkin hatara käsite [MIT](https://engineering.mit.edu/engage/ask-an-engineer/can-a-computer-generate-a-truly-random-number/). Oma satunnaisuuteni ja sekoitusalgoritmi noudattaa [Fisher - Yates Sekoitusta](https://bost.ocks.org/mike/shuffle/). Mallinnus JavaScriptiin on haettu [täältä](https://stackoverflow.com/a/2450976).


## Käyttö
Ohjelma on täysin selainpohjainen, joten käyttö onnistuu kaikilla laitteilla. Projekti on myös pyritty Bootstrapin avulla luomaan mahdollisimman saavutettavaksi ja responsiiviseksi. Ohjelma skaalautuu siis laitteen mukaan oikean kokoiseksi ja on fonteiltaan, sekä ulkoasultaan mahdollisimman selkeä. Tällä hetkellä projekti pyörii koulun palvelimella ja osoite, jossa ohjelmaa pääsee käyttämään on: http://users.jyu.fi/~laitjjxz/pairing/ 

## Käytetyt teknologiat
Ohjelma on kirjoitettu hyödyntämällä seuraavia:
* HTML5
* JavaScript & Document Object Model (DOM)
* Bootstrap 5

## Roadmap
* [x] Toimiva sovellus
* [x] Bootstrapin lisääminen -> responsiivisuus ja tyylit
* [ ] Linkki sorsakoodiin
* [ ] Ohjelman siirto herokuappiin
* [ ] Darkmode
* [ ] Mahdollisuus englannin/ruotsin kieleen
* [ ] Jakaminen omaehtoisiin ryhmäkokoihin (jako kolmeen, viiden hengen ryhmät)?


## Lisenssi
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Projekti on [MIT](https://opensource.org/licenses/MIT) -lisenssin alaisuudessa. Toisin sanoen täysin "vapaata riistaa".

## UKK
No mitä himskattia, nettihän on täynnä random pair generaattoreita?
* Niin on, mutta mistä sitä tietää minne kaikkialle nimet tallennetaan? Löytyykö useampaa näin selkeää ja responsiivista **SUOMENKIELISTÄ** generaattoria.

Mitä vikaa on pipo ja paperilappu -kombossa?
1) Väsynyttä ja vanhaa 
2) Olen tietoteknikko 
3) Syö hirveästi aikaa itse opetukselta 
4) Tuhlaa paperia 
5) Pipo on likainen 
6) Näitä syitä voisi jatkaa maailman tappiin...

Miten on onnettaren laita?
* Onnetar voi kliksuttaa "Generoi parit" -nappia.
