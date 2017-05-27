$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("terms.feature");
formatter.feature({
  "id": "login-feature",
  "tags": [
    {
      "name": "@login",
      "line": 1
    }
  ],
  "description": "I want to use this template for my feature file",
  "name": "Login Feature",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "login-feature;validate-the-username-and-password",
  "description": "",
  "name": "Validate the UserName and Password",
  "keyword": "Scenario",
  "line": 5,
  "type": "scenario"
});
formatter.step({
  "name": "I have a prescription Application",
  "keyword": "Given ",
  "line": 6
});
formatter.step({
  "name": "I enter the correct UserName and Password",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should be able to see the HomePage",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "location": "DataVariableTest.i_have_a_prescription_Application()"
});
formatter.result({
  "duration": 592896959,
  "status": "passed"
});
formatter.match({
  "location": "DataVariableTest.i_enter_the_correct_UserName_and_Password()"
});
formatter.result({
  "duration": 7493201973,
  "status": "passed"
});
formatter.match({
  "location": "DataVariableTest.i_should_be_able_to_see_the_HomePage()"
});
formatter.result({
  "duration": 8414737,
  "status": "passed"
});
formatter.scenario({
  "id": "login-feature;validate-the-login-functionality",
  "description": "",
  "name": "Validate the Login Functionality",
  "keyword": "Scenario",
  "line": 11,
  "type": "scenario"
});
formatter.step({
  "name": "I enter an invalid userName and Password",
  "keyword": "Given ",
  "line": 12
});
formatter.step({
  "name": "i initiate the tool",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I should be able to guide the tool",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "location": "DataVariableTest.i_enter_an_invalid_userName_and_Password()"
});
formatter.result({
  "duration": 124997,
  "status": "passed"
});
formatter.match({
  "location": "DataVariableTest.i_initiate_the_tool()"
});
formatter.result({
  "duration": 78444,
  "status": "passed"
});
formatter.match({
  "location": "DataVariableTest.i_should_be_able_to_guide_the_tool()"
});
formatter.result({
  "duration": 53151,
  "status": "passed"
});
});