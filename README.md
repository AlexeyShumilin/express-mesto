# Project Mesto frontend + backend


## Stack
React.js
JavaScript (ES6)
Node.js
Express
MongoDB
Mongoose
ESlint

## Functionality
registration and authorization
creating a new card
like card
deleting a card
updating the avatar and information about the user.

## Directories

`/public` - statics obtained as a result of building a front-end application in React. 
`/data` - JSON files for temporary database emulation. 
`/routes` - folder with router files. 
  
## Routes
GET /users - returns all users
GET /users/:userId - returns user by _id
POST /users - creates a user

GET /cards - returns all cards
POST /cards - creates a card
DELETE /cards/:cardId - deletes a card by ID


## Launch of the project

`npm run start` - starts the server
`npm run dev` - starts the server with hot-reload
