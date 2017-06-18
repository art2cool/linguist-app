import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from '../reducers';
import { redirect } from '../middlewares/redirect';
// import storageLoad from '../middlewares/localStorageLoad';
// import storageSave from '../middlewares/localStorageSave';
export default function configureStore () {
    const store = compose(
        // applyMiddleware(storageLoad),
        applyMiddleware(thunkMiddleware),
        // applyMiddleware(storageSave),
        applyMiddleware(redirect)
    )(createStore)(rootReducer);
    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').rootReducer;
    //         store.replaceReducer(nextRootReducer)
    //     });
    // }
    return store;
}
