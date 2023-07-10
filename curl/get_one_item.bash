#!/bin/bash
ID=$1
curl -X GET -H "Content-Type: application/json" http://localhost:5000/api/todo/${ID}
