import { createStore } from 'redux';

function reducer() {
    return {teste:1}
}


const store = createStore(reducer)

export default store;