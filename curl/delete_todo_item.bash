#!/bin/bash
ID=$1
curl -X DELETE http://localhost:5000/api/todo/${ID}
