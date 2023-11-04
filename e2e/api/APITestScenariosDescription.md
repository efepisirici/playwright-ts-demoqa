# Automated API Test Documentation

## Introduction 📝 
This document describes the tests implemented for the BookStore API using Playwright. It covers user account management and book handling functionalities.

## Prerequisites🚀
- Node.js
- npm (Node Package Manager)
- Playwright Test Runner

Ensure that all dependencies are installed by running `npm install`.

## Test Scenarios ✨

### User Account Tests

**1. Test for User Creation**
- **Objective**: Ensure a user can be created with valid credentials.
- **Method**: POST
- **Endpoint**: `/Account/v1/User`
- **Expected Status Code**: 201 Created
- **Assertions**:
  - Response contains a `userId`.
  - Response contains the `username` that was sent in the request.

**2. Test for Duplicate User Prevention**
- **Objective**: Verify that creating a user with an existing username is not allowed.
- **Method**: POST
- **Endpoint**: `/Account/v1/User`
- **Expected Status Code**: 406 Not Acceptable
- **Assertions**:
  - Response contains an error `code`.
  - Response contains a `message` stating 'User exists!'.

### Authentication Tests

**3. Test for Token Generation**
- **Objective**: Confirm that a token can be generated for user authentication.
- **Method**: POST
- **Endpoint**: `/Account/v1/GenerateToken`
- **Expected Status Code**: 200 OK
- **Assertions**:
  - Response includes a non-empty `token`.

### Book Handling Tests

**4. Test for Retrieving Book List**
- **Objective**: Check if the book list can be retrieved.
- **Method**: GET
- **Endpoint**: `/BookStore/v1/Books`
- **Expected Status Code**: 200 OK
- **Assertions**:
  - Response contains a list of `books`.

**5. Test for Adding Books to User**
- **Objective**: Ensure that books can be added to the user's collection.
- **Method**: POST
- **Endpoint**: `/BookStore/v1/Books`
- **Expected Status Code**: 201 Created
- **Assertions**:
  - The specified books by ISBN are added to the user's collection.

## Running the Tests

To execute the tests, use the following command:

```bash
npm run test:api
````
![api-test-results](/resources/Screenshot_2023_11_04-1.png)

## Test Reporting
To show results in report,
```bash
npx playwright show-report
````
![api-test-results](/resources/Screenshot_2023_11_04-2.png)
