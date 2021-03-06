import { createStore, render } from 'utils';
import homeReducer from './reducers';
import HomeApp from './components/HomeApp';
import {initData} from './actions';


const store = createStore(homeReducer);


if (window.homeData) {
    store.dispatch(initData(window.homeData));
}

render(
    store,
    HomeApp,
    document.getElementById('home-app')
);
