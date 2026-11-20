  "use strict";

let title;
let hyperlink;
let image;
let info;
let summary;

const titleTarget = document.createElement("#show-title");
const linkTarget = document.querySelector("#show-link");
const imageTarget = document.querySelector("#show-image");
const summaryTarget = document.querySelector("#show-summary");

  //Lomake ja sen lähetys
  const tvForm = document.querySelector("#tv-form");
  tvForm.addEventListener("submit", async function (evt) {
    evt.preventDefault();

    // haetun ohjelman nimi
    const programName = document.querySelector("input[name=tv-search]").value;
        //Tyhjennetään sivu
        titleTarget.innerHTML = "";
        imageTarget.innerHTML = "";
        linkTarget.innerHTML = "";
        summaryTarget.innerHTML = "";
    try {
        // API vastaus
        const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${programName}`);
        const jsonData = await response.json();

        console.log(jsonData); // tulostetaan tulos konsoliin

        //Muodostetaan sivun sisältö
        title = jsonData.name;
        hyperlink = '<a href="' + jsonData.url + '"target="_blank">Lisää tietoa</a>';
        image = '<img src=' + jsonData.image.medium + ' alt="Sarjan juliste>'
        summary = jsonData.summary;

        //Tiedot sivulle
        titleTarget.innerHTML = title;
        imageTarget.innerHTML = image;
        linkTarget.innerHTML = hyperlink;
        summaryTarget.innerHTML = summary;
    } catch (error) {
        console.log(error.message);
    }
    });