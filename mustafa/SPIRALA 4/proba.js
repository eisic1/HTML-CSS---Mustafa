let Pretraga = (function() {
  let elementi;

  let postaviElemente = (kolekcija) => {elementi = kolekcija}

  // PRIVATE
  let ispisiElemente = () => { for (let i = 0; i < elementi.length; i++) console.log(elementi[i]) }
  let sakrijElement = (e) => { e.style = "display: none;" }
  let restartElemente = () => { for (let i = 0; i < elementi.length; i++) elementi[i].style = ""}

  // GLOBAL
  let pretragaPredmet = (predmet) => {
    restartElemente()
    predmet = predmet.toLowerCase()
    for (let i = 0; i < elementi.length; i++) {
      let celijeElementa = elementi[i].getElementsByTagName('td')
      let imePredmeta = celijeElementa[0].innerHTML.toLowerCase()
      let opisPredmeta = celijeElementa[1].innerHTML.toLowerCase()
      if(!imePredmeta.match(predmet) && !opisPredmeta.match(predmet)) sakrijElement(elementi[i])
    }
  }

  let pretragaNastavnik = (profesor) => {
    restartElemente()
    profesor = profesor.toLowerCase()
    for (let i = 0; i < elementi.length; i++) {
      let celijeElementa = elementi[i].getElementsByTagName('td')
      let imeProfesora = celijeElementa[2].innerHTML.toLowerCase()
      if(!imeProfesora.match(profesor)) sakrijElement(elementi[i])
    }
  }
  let pretragaGodina = (godina) => {
    restartElemente()
    for (let i = 0; i < elementi.length; i++) {
      let tableBody = elementi[i].parentNode
      // console.log(tableBody.className)
      if((godina == 1 && tableBody.id !== 'prva-god') || (godina == 2 && tableBody.id !== 'druga-god')) sakrijElement(elementi[i])
    }
  }

  return {
    postaviElemente: postaviElemente,
    pretragaPredmet: pretragaPredmet,
    pretragaNastavnik: pretragaNastavnik,
    pretragaGodina: pretragaGodina
  }
}())