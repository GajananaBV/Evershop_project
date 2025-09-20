Feature: Subscription Flow

  Scenario: Signup page and Admin validation
    Given I navigate to the homepage
    When I open the signup form
    And I complete the signup with valid details
    Then I should be redirected to the homepage
    When I login as Admin
    Then I should see the newly created user in the Customers list