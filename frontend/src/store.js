{/* this is a temporary store in your browser used by your apploication alone. */}
//This is only to take data from the DB and share it across components and for faster access to data // 
/* This is part of the first step to setting up redux. Redux allows one to share data across components. It is a library that allows you to create a global memory for any component to access, as a temp store. For example, a button click triggers a fuction(action). The info is passed to a reducer who listens for a specific type of data they have been subscribed to, and the info is then written in a store. The data is then available to all components. */
/* The process is to create a store, create a reducer, write the actions and then hook up with components.  */
/* before creating store.js install in front end the following: npm i redux react-redux redux-devtools-extension redux-thunk (4 downloads) */


import { createStore, combineReducers, applyMiddleware} from 'redux'              /* All these imported funtions exist within the redux library. createStore creates a store, combineReducers combines reducers to be added to parameters as a group under one name, and applyMiddleware which breaks data into array of thunks. If you make an enhancement to the store(thunking in this case), you have to use appMiddleware. appmiddleware is a function that changes data, it will break the data into thunks.  */
import thunk from 'redux-thunk'                                             /* break the data into chunks. */

/*  Fire the function createStore, and give it 2 parameters. 1. reducers- Reducers are always used to write data into the store. They are functions and there is one reducer for each task.  2. initial state- default data that is seen within store/preloaded stored data.  */

const reducer = combineReducers({})                                 /* function in redux that combines all reducers, empty objects,. Store that in value reducer and give it to the store. */
const initialState = {}                                                 /* this is the initial state, its an empty object. */
const middleware = [thunk]                                              /* array of thunks stored in a variable called middleware */
const store = createStore(                                              /* store this in a variable store. */
                reducer,                                                       /* this parameter includes the collection of reducers */
                initialState,                                                     /* when app is first loaded, what data will be displayed by deafault. */
                applyMiddleware(...middleware)                 /* where you can makes changes to the data. thunk is done here. thunk breaks data down into small chunks to transfer data to store faster. When changing data, call applyMiddleware function. Takes existing data, and thunk it. spread operator.  */         
                )
export default store 



/* debug in browser easily to know what was written into the store adn what wasnt.use  chrome extension- install redux dev tools and react developer tools.*/
/* Store must be hooked up to application, in index.js.In index.js, import provider library (component) from react redux. Provider assists with linking the store to the rest of the application., then import store file.  */
/*   in index.js: Lastly wrap the whole app component tag in a provider component store say that the store can be used  by all components in the app.*/