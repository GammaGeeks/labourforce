[![Coverage Status](https://coveralls.io/repos/github/GammaGeeks/labourforce/badge.svg?branch=develop)](https://coveralls.io/github/GammaGeeks/labourforce?branch=develop)
[![Build Status](https://travis-ci.org/GammaGeeks/labourforce.svg?branch=develop)](https://travis-ci.org/GammaGeeks/labourforce)
[![Maintainability](https://api.codeclimate.com/v1/badges/fc9279b6b2242e1e96de/maintainability)](https://codeclimate.com/github/GammaGeeks/labourforce/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fc9279b6b2242e1e96de/test_coverage)](https://codeclimate.com/github/GammaGeeks/labourforce/test_coverage)
# LabourForce App

The purpose of this project is to ease the hiring on qualified worker in labour that do not neccessary need contracts as agreement between employer and employee.

Within this project you will find constist of:

* A worker can create an account
* A worker can see a list of interested job
* An employee can view profiles of workers and their expertise
* An employee can post a job that needs to be done
* An employee can pay employer via the app
* An worker can be paid via the app
* An employer and employee will schedule the work time.
* An employer can create an account

## API Documentation
[All API documentation](https://documenter.getpostman.com/view/9048923/SWE3eL4G)

## Pivotal Tracker Stories
[Project Stories](https://www.pivotaltracker.com/n/projects/2442084)


## Heroku link
[Click Me](https://broadcaster-application.herokuapp.com/)

## Backend, Frameworks and other tools used
- Node js
- Express
- Mocha and Chai(for testing)
- babel

## Installation Guide
- To use this project locally you must install node js, then clone the project using
```
> git clone https://gitlab.com/nigorjeanluc/labourforce.git
```
- after cloning the project, you must install all the project dependencies using
```
> npm i
```
- after installing the project dependencies, you need to create a .env file to the project root and specify which port the project will run on and the JWT key
```
> touch .env
```
- copy the content of the file .env.sapmle and paste it in this file and after that you are good to go, now you can run the project using
```
> npm start
```
- to test endpoints you will use a tool called postman.
- and finally to run tests you can use
```
> npm test
```
## Contributor
Igor J.Luc Ndiramiye nigorjeanluc@gmail.com

## Copyright
Copyright (c) GammaGeeks Enterprise