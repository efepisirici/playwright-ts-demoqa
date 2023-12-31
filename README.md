# Playwright Tests with TS for [demoqa](https://demoqa.com/)

Welcome to the playwright-ts-demoqa repository. This suite uses Playwright for end-to-end testing, ensuring high-quality and reliable software delivery.

## Introduction 📘

playwright-ts-demoqa's automated testing suite is essential for validating the functionality and performance of our web application. For an in-depth look at the test cases and please refer to our detailed documentation [here for ui](https://github.com/efepisirici/playwright-ts-demoqa/blob/main/e2e/ui/UITestScenariosDescription.md) and  [here for api](https://github.com/efepisirici/playwright-ts-demoqa/blob/main/e2e/api/APITestScenariosDescription.md).

## Prerequisites 🚀

Before setting up the project, ensure you have the following tools installed:

- Node.js (Download from [nodejs.org](https://nodejs.org/))
- npm (comes with Node.js)
- Playwright (`npm i -D @playwright/test`)

## Getting Started 🌟

To get a local copy up and running, follow these simple steps:

1. Clone the repo: `git clone https://github.com/efepisirici/playwright-ts-demoqa.git`
2. Navigate to the project directory

## Installation 🛠️

Set up your development environment by running:

```bash
npm install
```

## Usage
1. Go to the main folder via console.
2. To run UI tests, execute `npm run test:ui`
3. To run API tests, execute `npm run test:api`

See more options to run tests in the package.json file
## Alternative Usage 
1. Build the Docker image
```bash
docker build -t efe-pisirici-gm-assignment .
```
2. Run the Docker container with the tests
```bash
docker run efe-pisirici-gm-assignment
```
## Additional information 

📁 Tests are located in /e2e folder

📁 Page Objects are located in /page-objects folder

