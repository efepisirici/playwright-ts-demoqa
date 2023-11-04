# Automated Web Test Documentation

## Introduction 📝
This document describes the Playwright tests implemented for testing various web functionalities such as form submissions, image verifications, progress bar behavior, tooltip functionality, and drag-and-drop actions.

## Prerequisites🚀
- Node.js installed on the system.
- npm (Node Package Manager) for managing project dependencies.
- Playwright Test Runner for executing the tests.

Make sure to install all project dependencies by running `npm install`.

## Test Scenarios ✨

### TC01 - User can enter and edit data in webtables

#### Scenario A: Verify user can enter new data into the table

1. Navigate to the Elements section.
2. Click on the Web Tables.
3. Trigger the Add button to open the registration form modal.
4. Verify that the Registration Form modal is displayed.
5. Fill the registration form with provided data.
6. Submit the registration form.
7. Verify that the new row in the table contains the data that was entered.

#### Scenario B: Verify user can edit the row in a table

1. Click the Edit button for the specified row.
2. Edit the first name and last name fields with new data.
3. Submit the updated registration form.
4. Verify that the row reflects the updated data.

### TC02 - Verify broken image

1. Navigate to the Elements section.
2. Click on Broken Links - Images.
3. Check the first broken image for visibility.
4. Expect that the broken image is not visible.

### TC03 - Verify user can submit the form

1. Navigate to the Forms section.
2. Click on Practice Form.
3. Fill the practice form with provided data.
4. Submit the form.
5. Verify that the modal header text contains "Thanks for submitting the form".
6. Confirm that the modal displays the student's full information correctly as per the submitted data.

### TC04 - Verify the progress bar

1. Navigate to the Widget section.
2. Click on the Progress Bar.
3. Check for the visibility of the progress bar header and start button.
4. Start the progress bar and wait for it to fill.
5. Verify that the progress bar reaches 100% width.
6. Click the reset button and verify that the progress bar width resets to 0%.

### TC05 - Verify the tooltip

1. Navigate to the Widget section.
2. Click on Tool Tips.
3. Hover over the button to display the tooltip.
4. Verify that the tooltip text contains the expected message.

### TC06 - Verify user can drag and drop

1. Navigate to the Interactions section.
2. Click on Droppable.
3. Check the visibility of the headers for "Drag me" and "Drop here".
4. Perform the drag-and-drop action.
5. Verify that the "Drop here" box title changes to "Dropped!" upon successful drag and drop.

## Notes

- The `afterEach` hook is commented out. If browser closure after each test is required, this can be uncommented.
- The `expect.soft` assertions are used for scenarios where the test should continue even when the assertion fails, allowing for multiple checks within a single test.

## Running the Tests

To execute the tests, use the following command:

```bash
npm run test:ui
````
![ui-test-results](/resources/Screenshot_2023_11_04-3.png)

## Test Reporting
To show results in report,
```bash
npx playwright show-report
````
![ui-test-results](/resources/Screenshot_2023_11_04-4.png)

