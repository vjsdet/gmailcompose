### Features
* Page Object Model
* Hooks
* Report
* Logger
* Video attached for failed tests
* Screenshot attached for failed tests
* Retry for failed tests
* Parallel execution 

### Instructions
* Clone the repo using below command.

  **git clone https://github.com/vjsdet/gmailcompose.git**
* Install Node.js from below URL.

  **https://nodejs.org/en/download/**
* Open the command prompt in the the root directory.
* Run the **npm install** command to install the dependencies.
* Run the **npx playwright install** command to install the dependencies.

### Email Credential
* Because of security reason email credentials are not present inside any file. You need to set it using environment variables.
* Open the command prompt in the root directory.
* Run the **SET EMAIL=YOUREMAIL** command to set the email.
* Run the **SET PASSWORD=EMAILPASSWORD** command to set the password.

### Page Object Model
* Test case is implemented using page object model.

### Hooks
* Hooks are implemented to capture and attach the screenshot and video for failed test cases in the report. 
* Hooks are also used to start and close the browser automatically when test starts and finishes. 

### Execution
* Open the command prompt in the root directory.
* Run the **npm run execute** command to execute the test cases.

### Report & Logs
* Multiple Cucumber Html Report is integrated.
* After execution, report file **index.html** is created under **test-results\reports** directory.
* Screenshot and video will be attached for failed scenarios.
* Logs files are available under **test-results\logs** directory.
* Below is the screenshot for the report.
![report](https://github.com/vjsdet/gmailcompose/assets/146126556/dea6859d-675d-4994-8323-53504ed3d763)

### Retry for failed tests
* Run the **npm run execute:failed** command to execute the failed test cases.
*  You can configure the retry behavior using **rerun** attribute of **cucumber.json** file located under the root directory.

### Parallel execution 
* By default, 3 scenarios will be executed in the parallel.
* You can set the count using the **default-->parallel** attribute of **cucumber.json** file located under the root directory.
* You can set **parallel:1** for serial execution. 
