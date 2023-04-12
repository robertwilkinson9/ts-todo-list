import React from "react";
import {RawTodoData} from './interfaces';

export const get_all = (url: string) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Handle data
      console.log("get_all data is ");
      console.log(data.data);
      return data.data;
    })
   .catch((err) => {console.log(err.message);});
};

export const deleteItem = (url: string) => {
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
    console.log(data.data);
    // Handle data
    return data.data;
  })
  .catch((err) => {console.log(err.message);});
};

export const add_todo = (url: string, newtodo: RawTodoData) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newtodo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("------------add_todo returned data is");
    // Handle data
    console.log(data.data);
    return data.data;
  })
  .catch((err) => {console.log(err.message);});
};

export const update_todo = (url: string, todo: RawTodoData) => {
  console.log("update_todo and url is ", url);
  console.log("update_todo and TODO is ", JSON.stringify(todo));
  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("PUT data is");
    console.log(data.data);
    // Handle data
    return data.data;
  })
  .catch((err) => {console.log(err.message);});
};
