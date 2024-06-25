Feature: Gmail Compose Tests

  Background:
    Given User navigates to the application
    When User enter the email
    And User click the next button
    And User enter the password
    And User click the next button
    Then User can see and select the gmail option from menu
    And User compose the new email

  Scenario: Send email with valid recipient
    Given User enter the to recipient as "noreply@gmail.com"
    And User enter the subject as "Incubyte"
    And User enter the message as "Automation QA test for Incubyte"
    When User click on the Send button
    Then User can see the message as "Message Sent"

  Scenario: Send email without recipient
    Given User enter the subject as "Incubyte"
    And User enter the message as "Automation QA test for Incubyte"
    When User click on the Send button
    Then User can see the message as "Please specify at least one recipient."

  Scenario: Send email with invalid recipient
    Given User enter the to recipient as "xyz"
    And User enter the subject as "Incubyte"
    And User enter the message as "Automation QA test for Incubyte"
    When User click on the Send button
    Then User can see the message as "Please make sure that all addresses are properly formed."
