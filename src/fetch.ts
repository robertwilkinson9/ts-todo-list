import {RawTodoData} from './interfaces';
import axios from "axios";
import { useQuery } from "react-query";

export const API_url = 'http://localhost:5178/api/';

const fetchUsers = () =>
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);

export default function useUsers() {
  return useQuery("users", fetchUsers);
}

export const get_all = (url: string) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Handle data
      console.log("get_all data is ");
      console.log(data.data);

      let retdata = data.data;
      console.log("get_all retdata is ");
      console.log(retdata);
      return retdata;
    })
   .catch((err) => {console.log(err.message);});
};

export const deleteItem = (url: string) => {
  console.log("deleteItem -> url is ", url);
  axios.delete(url);
};

export const add_item = (url: string, newtodo: RawTodoData) => {
  console.log("add_item and TODO is ", JSON.stringify(newtodo));
  const context = {headers: {'Content-type': 'application/json; charset=UTF-8'}};
  axios.post(url, newtodo, context)
  .then((response) => {
    console.log("add_item and RESPONSE is ", JSON.stringify(response));
    return response;
  })
  .catch(err => console.log(err));

{ /*
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
*/ }
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
