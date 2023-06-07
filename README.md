# persistenAccountDemo

This repository contains code for managing persistent accounts using Node.js, Express.js, MongoDB, and Mongoose.

## Description

The persistenAccountDemo is a sample application that demonstrates the basic functionality of creating and updating persistent accounts. It provides a RESTful API for registering and updating persistent accounts, with data stored in a MongoDB database.

## Features

- Register a Persistent Account: `POST /registerPersistentAccount`
  - Creates a new persistent account in the database based on the provided data.
  - Returns the `referenceNumber` and `accountReference` of the created account.

- Retrieve a Persistent Account: `GET /getPersistentAccount/:id`
  - Retrieve an already existing account in the database based on the provided data.
  - Returns the `referenceNumber`, `statusCode`, `statusMessage`, `accountReference`, and `accountNumber`

- Update a Persistent Account: `POST /updatePersistentAccount`
  - Finds the existing persistent account in the database based on the `referenceNumber` provided in the request body.
  - Updates the account with the provided data.
  - Returns a success response if the account is updated successfully.

- Delete a Persistent Account: `DELETE /deletePersistentAccount/:id`
  - Deletes an existing persistent account.
  - Returns `referenceNumber`, `accountReference`, and `reason`

## Prerequisites

Before running the code, make sure you have the following prerequisites installed:

- Node.js
- MongoDB
