"use strict";

let speciesTBody = document.querySelector("#speciesTable tbody");
console.log(speciesTBody);

async function getSpecies() {
  //you get a promise object back which
  //will send you a signal that the previous operation has completed
  let promise = fetch("https://swapi.dev/api/species/"); //asking another computer for the data
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let species = await response.json(); //turn JSON string in the body into a JavaScript array of objects
  console.log(species);
  displaySpecies(species.results);
}

function buildTableRow(species) {
  let tr = speciesTBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = species.name;

  let td2 = tr.insertCell();
  td2.innerText = species.classification;

  let td3 = tr.insertCell();
 td3.innerText = species.average_height


  let td4 = tr.insertCell();
  td4.innerText = species.skin_colors;

  let td5 = tr.insertCell();
  td5.innerText = species.language;



}

function displaySpecies(speciesArray) {
  for (const species of speciesArray) {
    buildTableRow(species);
  }
}

getSpecies();
