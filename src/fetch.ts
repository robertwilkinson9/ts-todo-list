import React from "react";

const deleteItem = (url: string) => {
  console.log("deleteItem -> url is ", url);
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("delete data is ");
    console.log(data);
    // Handle data
  })
  .catch((err) => {
    console.log(err.message);
  });
};

export default deleteItem;
