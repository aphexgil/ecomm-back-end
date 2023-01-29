# Ecommerce Back-End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The back-end for an e-commerce site which uses Express.js API routes to interact with a MySQL database.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)
- [Questions](#questions)

## Installation

Copy the repository from Github, run 'npm i' in the root directory to initialize node packages, run the commeands from 'db/schema.sql' in MySQL to initialize the database, and finally run 'node seeds/index.js' to seed the database.

## Usage

To start the server, run 'node server.js' in the project root directory. With the server running, the user can interact with the database using '/api/categories', '/api/tags' and '/api/products' routes. User can GET all categories, tags, or products using these routes, or can GET a single category, tag or product by appending '/id' to the end of the route (ex. GET 'localhost:3001/api/products/5' will GET the product with 'id':5). User can POST new categories, tags or products using any of these routes. User can PUT edits to any existing category, tag or product by again appending that object's id to the route and including attribute updates in the header. User can DELETE and category, tag or product by 'id'.

## Credits

None.

## License

  This software is covered under MIT License. To find out more, visit [MIT License](https://opensource.org/licenses/MIT)

## Testing

No tests provided at this time.

## Questions

If you have any questions, direct them to https://github.com/aphexgil or gil.young.1994@gmail.com.
