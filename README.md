# Notes React App

A modern React app for creating, editing, and managing notes—now with seamless Cypress end-to-end testing and beautiful, automatic Mochawesome HTML reports!

---

## Features

- Effortless note creation, editing, and deletion
- Secure user authentication
- Responsive, user-friendly UI
- End-to-end tests powered by Cypress
- **Automatic single-file HTML & JSON test reports** with [cypress-mochawesome-reporter](https://github.com/lukejpreston/cypress-mochawesome-reporter)

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/notes-react.git
cd notes-react
```

### 2. Install Dependencies

```sh
npm install
```

---

## Running Cypress Tests with Mochawesome

### 3. Install Cypress & Mochawesome Reporter

```sh
npm install --save-dev cypress cypress-mochawesome-reporter
```

### 4. Cypress Configuration

Your `cypress.config.js` should look like this:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: true,
      html: true,
      json: true
    }
  },
});
```

**Also add this line to your `cypress/support/e2e.js`:**

```js
import 'cypress-mochawesome-reporter/register';
```

No need to import anything in your test files—just write your tests and enjoy automatic reporting!

---

### 5. Run the Tests

```sh
npx cypress run
```

A single HTML and JSON report for all tests will be generated automatically in the `cypress/reports` directory.

---

## Viewing the Mochawesome Report

After running your tests, open the HTML report:

```sh
npx open cypress/reports/mochawesome.html
```
Or simply open the generated HTML file in your browser.

---

##  Continuous Integration

No need to worry about setting up CI yourself—**GitHub Actions workflow is already included in this repo!**  
Every push or pull request to the `main` branch will automatically:

- Install dependencies
- Run all Cypress tests
- Generate a beautiful Mochawesome HTML report
- Upload the report as a build artifact

You’ll find the workflow file ready to go at `.github/workflows/cypress-tests.yml`.  

  




<img width="1608" height="808" alt="Screenshot 2025-07-25 140135" src="https://github.com/user-attachments/assets/c3cb5f9b-1aad-41e1-93a1-4515e2a95004" />


<img width="2800" height="1537" alt="Screenshot 2025-07-25 140207" src="https://github.com/user-attachments/assets/e3039745-c2b5-4ff1-845b-6debc10a938f" />

<img width="2793" height="1003" alt="Screenshot 2025-07-25 140448" src="https://github.com/user-attachments/assets/c959f458-109c-4408-b2e9-e35ddaebe12d" />

<img width="2845" height="1480" alt="Screenshot 2025-07-25 140501" src="https://github.com/user-attachments/assets/e2db1bb9-62ee-4b55-8563-b510669da663" />
