const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Gmail Compose Report",
  pageTitle: "Gmail Compose Test Report",
  displayDuration: false,
});
