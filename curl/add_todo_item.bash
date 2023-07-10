#!/bin/bash
curl -X POST -H "Content-Type: application/json" --data @new.item http://localhost:5000/api/todo
