import { createStore } from 'redux';

const INITIAL_STATE = {
    boxes:[
        {author: 'bruno barbosa'},
        {author: 'gabriel Silva'},
        {author: 'Henrique Alves'}
    ],
    inputValue: ''
}

function reducer(state= INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_BOX':
            return {...state, boxes: [...state.boxes, {author: state.inputValue}]}
        case 'UPDATE_INPUT':
            return {...state, inputValue: action.inputValue}
        default:
            return {...state}
    }
}


const store = createStore(reducer)

export default store;