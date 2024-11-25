"use strict";

async function getData() {

    
  let promise = fetch("https://httpstat.us/500");
  let response = await promise;
  // console.log(response.status, response.statusText);
  if (response.status === 500) {
    console.log("Unavailable. Please try again in a few minutes.");
  } else {
    let data = await response.json();
    console.log(data);
  }
}
getData();
