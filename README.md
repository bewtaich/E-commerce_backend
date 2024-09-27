# Employee Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)
- [Walkthrough](#walkthrough)
  
## Description

This app is for managing a shop's data. With this you can perform CRUD operations on the data, allowing for quick and easy creating, reading, updating, or deleting of data.

## Installation

In the terminal run "npm install" to install the dependencies. Then use "psql -U (Your Username)" and enter your password. Use "\i ./db/schema.sql" to initialize the database and then "\q" to quit out of the postgresql shell. Use "npm run seed" to seed the database and then "node server.js" to start the server

## Usage

Using http methods you can update the database using Insomnia.

Use
GET to view data,
POST to create new data,
PUT to update existing data, and
DELETE to delete data

For the URL enter localhost:3001/api/ followed by either products, categories, tags, depending on your need.
(Ex: localhost:3001/api/products)

To only interact with a specific item, use the route followed by the id number of the item. Note, an ID is required for PUT and DELETE requests
(Ex: localhost:3001/api/categories/4)



For PUT and POST request you must include a body in JSON format. 
(Ex: {"category_name": "kitchen_supplies"})


## License

This project is protected under the MIT License

## Questions

For more questions contact [bewtaich](https://github.com/bewtaich) at <bewtaich@gmail.com>

## Walkthrough

https://drive.google.com/file/d/1W8ShVJC0JKsy2rw5CY5sXwiIsDAh4yRI/view