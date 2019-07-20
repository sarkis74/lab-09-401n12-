![CF](https://i.imgur.com/60omTQF.png) 
=================================================

## API Server Documentation [![Build Status]()

### Author: Sarkis Aghazarian

### Links and Resources
* [repo](https://github.com/sarkis74/lab-09-401n12-)
* [travis](https://travis-ci.org/sarkis74/lab-09-401n12-)

### Modules
#### `modulename.js`

### Exported Values and Methods
* Models: `teams-model.js` `teams-schema.js` `players-model.js` `players-schema.js` `categories-model.js`

### Setup
#### `.env` requirements
* `PORT` - 8000
* `MONGODB_URI` - mongodb://localhost:3000

#### Running the app
* `node index.js`
* `GET /api/v1/:model` Returns an array of JSON objects (category, team, or player depending on the model)
* `GET /api/v1/:model/:id` Returns an object (category, team, or player) by ID
* `POST /api/v1/:model` Posts an object (category, team, or player) depending on the model
* `DELETE /api/v1/:model/:id` Deletes an object (category, team, or player) depending on the model
* `PUT /api/v1/:model/:id` Updates an object (category, team, or player) depending on the model
  
#### Tests
* `npm test`
* Tests the `GET` `POST` `DELETE` `PUT` methods for each model (categories, players, and teams)
* Should have a status of 200 on a good route
* Should have status of 404 on unknown route
* Should have status of 500 on a server error

![github](https://github.com/sarkis74/lab-09-401n12-/tree/master/starter-code)

![diagram](https://i.imgur.com/X7uaywP.png)
