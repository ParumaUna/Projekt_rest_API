# Project_rest_API
Project_rest_API is a working REST_API without an added database in this case. With the help  of controllers and routes, referenced to the MVC-model, this project is a fully working REST_API.
# How to get the server running:
---
``` 
npm start
//
node server.js
``` 
---
# NPM packages used:
---
``` 
 npm install express 
 npm install -D nodemon
``` 
---
# Functions used:
* contacts
---
``` 
http://localhost:8000/contacts/ - When in get: displays all the contacts.
http://localhost:8000/contacts/ - When in post: - adds the new contact made in JSON.
 ex: {"name": "*contact*"}
http://localhost:8000/contacts/*ID*- When in put: changes the contact that is selected (by it`s ID).
 ex: {"name": "*new contact*"}
http://localhost:8000/contacts/*ID* - When in delete: deletes the contact (selected by it`s ID.
``` 
---
