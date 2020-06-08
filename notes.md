# Testing

## Objectives

- setup testing from scratch - pure JS code
- write unit tests
- Test Driven Development

AAA = Arrange --> Act --> Assert

// Unit Test
function(args) => return value; To test it, we invoke a function. 

// React
Component(props) => return UI; To test it, we render a component.

// BE - API Test
Endpoint(data) => return HTTP response; To test it, we make a request.  

Test Suite: a group of tests in the same file

> make sure your test can fail. 


## User Stories (What is it supposed to do & Why we need this functionality? )

As a ... role (user, admin, system admin, etc.)
I want ... feature
So that ... value

As an analyst
I want a calculator that can add two numbers
So that I can write the sales reoprts

### Scenarios (How to do it - the happy path)

```txt
Given 
  and ...
  and ...
When ...
	and ...
Then ...
	and ...
```

Given two numbers
When the add function is invoked
Then it should return the sum of the two numbers

## Test Driven Development/Design

Red > Green > Refactor -----------> Commit (to reset)

Red: write a failing test

Green: write enough implementation code to make the test pass

Refactor: rewrite the code without changing the functionality. reformatting the tests and implementation code without breaking the tests. 












Everything is a function. The only thing that changes is the syntax

Unit testing is more granular than react testing (integration testing - black box)
actually test each key pad that works on the microwave in isolation
take that LCD test it without a key pad & the turn table

minimizes the human error - bias of "I wrote the code"
regressions are minimized - code was working suddenly stops working 
Automated testing is good for that, gives you a safety net
Things that you are testing for, those are not going to break without you not knowing 
The test will tell you, this feature is not working 
You will prevent regressions gripping int your code