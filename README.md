# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To install and run the project
Once cloned, enter the root folder of the project and run
### `npm install`

## Adding the TMDB api key
Copy the file ".env.sample" at the same level of the project and name it ".env". Inside the file replace 'abcdefghi' with the TMDB api key.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Some of the used tecnologies 
State Management React Redux and React toolkit query
UI component library Material UI
React router dom to manage the routing
To test used the library testing-library/react


## Using the app
*User can navigate between 2 routes: home ('/') and My List ('mylist')
*User can loggin as a guest by clicking the button "Login as guest" in the navbar or "Logins as guest to rate" in the details of a movie.
*User can see a list of popular movies in home section
*User can see the details of a specific movie in a modal when the user click the info button 
*User can rate a movie from the detail modal using 
*User can see the list of rated movies, 
    -if the user is not logged as guest then in the section "My List" will show a message asking to login as guest.
    -if the user is logged as guest but haven rated any movie then in the section "My List" will show a message asking to rate a movie.
*User can logout as guest, IMPORTANT every time the user logout and loggin as guest again the session will be reseted so the list of rated movies will be erased.
*User can search movies in the "Home" section.

## Regarding the store, slice and api
Two api were created, "src\store\api\authApi.ts" and "src\store\api\movieApi.ts". 
    *authApi is to manage the request to login as guest and logout 
    *movieApi is all the request to load, get details,  search,  rate popular movies and list my rated movies. When the user rates a movie, the cache of rated movie list is invalidated by providing the tag "MyRatedMovies" to the key "invalidatesTags" this is way every time the user rates a new movie the list of my rated movies is fetched again from the server.
    *src\store\slice\detailModalSlice.ts is an slice to manage the block state of the modal of details, this probably will be used in the future to prevent the user exist from the modal to quick.


## Regarding the tests
Part of the functionality of the home was tested, mocking server responses in different scenarios in order to test cases when the data have not arrived and when the data is already arrived. Inside the folder "src\pages\___test___" there are a pom file to follow the pattern "Page object model" and keep in a different layer the access to the page, the file "mocks.ts" with two objects used as mocks responses from the server request for popular movies, "scenarios.ts" are objects to encapsulate different scenarios to test and "Home.test.ts" where is placed the test.
*Home.test.ts contains test to load the popular images, change to other page and display the progress icon.



## Folder structure of the project
Really basic structure, 
* src\components: Contains all the components except the components App, Home and MyList.
* src\hooks: Contains the needed hooks, for now there is only a utility hook to manage the state of the modal.
* src\pages: Contains the pages of the project, for now the Home and MyList pages.
* src\store: Contains all related to the store. api, slices and the store.
* src\utils: Contains all files or modules that can be for utility. For now there is only one file with one utility function to get the year from a date.
* src: Contains the basic files generated by create-react-app. There is a file src\constants.ts that contains the urls to get the images and the base for the api.

## Regarding branches
* master, it is the initial state of the project
* develop, it has the last version of the project


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



