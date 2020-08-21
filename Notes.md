## Unit Testing

- function that has some arguments and will return a value
- test by invoking the function and putting in different values as args and checking the result you receive back from the function

## Front-End Testing

- test a component by putting in props and getting back a piece of UI
- check the UI received from component against what is expected back
  - need rendering framework to get UI and check

## Back-End Testing

- test an endpoint by passing a request and receiving a response
- check the response against what is expected back
  - need framework to test the endpoint
    - server
    - api framework ex. Node.js
    - database
    - etc.

## Everything is a function!

## Init Jest

- jest --init will create a jest.config.js file
- can configure jest inside package.json instead as a "jest":{} with the keys inside the object

jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no

- may want to check how much of the code has tests
- report for the software

  ✔ Which provider should be used to instrument code for coverage? › v8
  ✔ Automatically clear mock calls and instances between every test? … yes

## Jest

- assumes tests are run synchronously
- if using for backend testing it's asynchronous so need to tell jest
  - put return in front of the operation
  - put async before the function and await the operation
    - will get warning from Jest for worker process get rid of the warning use --runInBand or -i
    - don't use until run into a problem with test failing then passing

## Supertest

- supertest will run the server for the instance of the test
- each test will get it's own isntance of the server

## Postgres SQL

- change environment to production
- npm i pg -> download postgres as denpendency
- deploy database on heroku through github
- go to resources and add on get heroku postgres
- add DB_ENV in Heroku to use production environment variable
- need to run migration on database to have the tables set up
- open console in heroku to run migration and seeds
