# See the result
https://cute-seahorse-6d13db.netlify.app
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

# How to extend functionality

## To add a new filter (tab) 

Add a new Filter declaration to the FILTERS configuration (/AppConfiguration/Filters)
### filter name (required)
Tab name
### filter value (required)
api call filter
### filterIsActive
if set to false filter tab won't be displayed ao the main screen
### searchIsActive
If set to false search button is disabled on the tab
### listImplementation
should implement IListComponent interface and dictates how the table is rendered for this filter
### detailsImplementation
should implement IDetailsComponent interface and dictates how the details page looks like for a specific record 
### filterClient
specifies a request client if different from the default one

## To change presentation

For organization purposes filter presentation files are stored in the following structure: 
presentation/{FilterName}/{files}

In case you desire to change specific filter presentation - just locate an appropriate item following the above structure

## Api changes
In case api base url or request path are changed, please make adjustments to appConfiguration/ApiConfig and UrlFormatter 

## Common components

Be aware: common components, e.g. search box, pagination, navigation are used across the pages
You can find them under components folder

## Warning! 
In some places specific types are used for structure and common sense.
Please proceed carefully if decide to pass around an untyped wild objects
Note: feel free to change names as you desire, except for fields in filter types,
e.g (presentation/{filterName}/{LooksLikeFilterButNotExactly} files) - 
these are reserved for correct json parsing  