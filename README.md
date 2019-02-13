# brickblock-frontend
A basic frontend that's built with react and uses redux for the state. This should display mock ICO offering data from the [brickblock-backend](https://github.com/CaelRowley/brickblock-backend)


## Deployment
There are two deployed environments 
https://brickblock-frontend-develop.herokuapp.com  For development
https://brickblock-frontend.herokuapp.com          For production
```
WARNING
As the application is deployed using the free heroku service they will sleep due to inactivity. 
Please allow a short while for the app to build and serve if you get no response from the URL.
```

## Access
The deployed 'brickblock-frontend' apps are protected with 'Auth0' and you will need to sign in with a valid user to access the website. You do not have permission to register your own account and get access. You can however run the application locally without needing to sign in with a user account.


## Prerequisites
1. [NodeJS](https://nodejs.org/)
2. You also need to have the [brickblock-backend](https://github.com/CaelRowley/brickblock-backend) server running with an exposed graphql endpoint


## Setup
1. Setup the [brickblock-backend](https://github.com/CaelRowley/brickblock-backend) project and get it hosting a graphql endpoint
2. Update `src/constants/GraphqlURI.js` to point to the graphql endpoint exposed by 'brickblock-backend' the default value is `http://localhost:8000/graphql`
3. Run `npm install` to install the dependencies


## Quickstart
Run the frontend locally as follows:

```
npm start
```

The app should now be avilable at http://localhost:3000/


## Project Scaffolding
The `src` directory contains the source code for the frontend. It is built using React and Redux. The `src/test` directory contains the source code for the tests. It is built usind the default react-scripts test library and Chai.
This source code is transpiled to the `build` directory for deployment and testing.
1. `npm run build` will transpile the `src` and `test` directories into `build`
2. `npm run serve` will run the transpiled app


## Testing
The default react-scripts test library and Chai are currently used for testing. The tests currently only exist on the `FrontendTests` branch.
```
npm test
```

## Linting
The project is using ESLint and Prettier to lint and format the code. The configuration for this is stored in `.eslintrc.json` and `.prettierrc.json` You can use the following commands:
1. `npm run pretty` to run Prettier
2. `npm run lint` to run ESLint
3. `npm run lint:fix` to run ESLint with the --fix prefix which will automatically fix certain linting errors

## Flow
Flow is used as a lightweight static type checker. Flow currently only exist on the `FrontendFlow` branch.
```
npm run flow
```

## Docker
There app is dockerized, and the Dockerfile builds the app in production mode for the automated deployments

## CI/CD
[CircleCI](https://circleci.com/) is used for continuous integration and deployment.

Developers are required to work locally on a new branch. 

When making a merge request into the 'development' CircleCI will trigger a 'build' job that will build the project, check linting, run flow, and run the tests. The merge request will be rejected if these checks fail.

After merging a 'deployToDevelopment' job will trigger which will deploy the app to https://brickblock-frontend-develop.herokuapp.com  

Only after the 'build' and 'deployToDevelopment' jobs have succsefully run will you be able to make a merge request into the 'master' branch which will trigger the final 'deployToProduction' job that will deploy the app to https://brickblock-frontend.herokuapp.com   

[Heroku](https://www.heroku.com/) is used for the automated deployments. CircleCI builds the Docker container and then pushes it to the heroku Docker hub and then releases the application making it visible
