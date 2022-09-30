# Search Pokemon App

React app showing searched pokemon and a CRUD of registered pokemon

The application was implemented with vercel and can be visited [Click](https://search-pokemon-reactjs.vercel.app/).

[![Pokemon-App-Reactjs](https://i.postimg.cc/TwV6Xcb2/20220930-002553.gif)](https://i.postimg.cc/TwV6Xcb2/20220930-002553.gif)

## Some Development Notes

### Task organization

I decided to organize my (initial) tasks into a [to-do] list](https://github.com/brunochan2001/Search-Pokemon-Reactjs/issues/1) .

Initial commits have a "task ID" before the descriptive message to make it easier to understand future code changes.

The task IDs are from the to-do list (for example, [i-1] for the base configuration)

### Library Decisions

- For the technology I use CRA because I can configure my repository quickly
- For the design use material-ui because it has ready components, fast and easy to use
- For the tests use only Jest, I only did unit tests for the moment
- Install react-use to use useDebounce() , because it limits the api call to a certain fraction of time so we will not have unnecessary api calls and it improves the performance of the application
- For the animations use animate.css because it is easy to use, they can be easily improved and maintained

### Additional Thoughts

- All requirements have been met
- Reports for the amount of data was not very clear, so I took the liberty of making a CRUD of reports of the pokemons that we registered uses the Firebase service as a backend

## How to run locally

- Clone repository
- Install

```
npm i
```

- Run a dev environment

```
npm start
```

- Run tests

```
npm run test
```
