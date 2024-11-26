"use strict";

async function createData(data) {

  let promise = fetch("http://localhost:3000/todos/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json"
    }
  });

  let response = await promise;
  let responseData = await response.json();
  console.log(responseData);
}

let data = {
    "userId": 1,
    "title": "learn post",
    "completed": true
  }

createData(data);